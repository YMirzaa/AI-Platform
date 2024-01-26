"use server";

import { ZodError } from "zod";
import { redirect } from "next/navigation";
import { conversationSchema } from "@/lib/schemas/conversationSchema";
import { cookies } from "next/headers";

export type FormState = {
	status: string;
	errors: any;
	data: undefined | { role: string; content: string }[];
	message: string;
};

export async function conversationAction(
	previousState: FormState,
	formData: FormData
): Promise<FormState> {
	try {
		const validationData = conversationSchema.safeParse({
			prompt: formData.get("prompt"),
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
		const request = [
			...previousState.data!,
			{ role: "user", content: validationData.data.prompt },
		];

		const token = cookies().get("access-token")?.value!;

		const response = await fetch(
			`${process.env.BASE_URL}/openai/conversation`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
				body: JSON.stringify(request),
				cache: "no-cache",
			}
		);

		const responseData = await response.json();

		if (response.ok) {
			return {
				errors: null,
				data: [...request, responseData],
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

