"use server";

import { ZodError } from "zod";
import { redirect } from "next/navigation";
import { imageSchema } from "@/lib/schemas/imageSchema";
import { cookies } from "next/headers";

export type FormState = {
	status: string;
	errors: any;
	data: undefined | string[];
	message: string;
};

export async function imageAction(
	previousState: FormState,
	formData: FormData
): Promise<FormState> {
	try {
		const validationData = imageSchema.safeParse({
			prompt: formData.get("prompt"),
			amount: formData.get("amount"),
			resolution: formData.get("resolution"),
		});
		if (!validationData.success) {
			const zodError = validationData.error as ZodError;
			const errorMap = zodError.flatten().fieldErrors;
			return {
				errors: errorMap,
				data: undefined,
				status: "Validation Error",
				message: "Validation Error",
			};
		}
		const request = {
			prompt: validationData.data.prompt,
			n: parseInt(validationData.data.amount, 10),
			size: validationData.data.resolution,
		};

		const token = cookies().get("access-token")?.value!;

		const response = await fetch(`${process.env.BASE_URL}/openai/image`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(request),
			cache: "no-cache",
		});

		const responseData = await response.json();

		if (response.ok) {
			return {
				errors: null,
				data: responseData,
				status: "Success",
				message: "Prompt Generated Successfully",
			};
		} else {
			throw new Error("Prompt Generation Failed", {
				cause: responseData.error,
			});
		}
	} catch (error: any) {
		return {
			errors: error.cause,
			message: error.message,
			status: "Error",
			data: undefined,
		};
	}
}

