import { z } from "zod";

export const imageSchema = z.object({
	prompt: z
		.string()
		.min(5, {
			message: "Prompt must be at least 5 characters long.",
		})
		.max(300, {
			message: "Prompt must be at most 300 characters long.",
		}),
	amount: z.string().min(1, {
		message: "Amount must be at least 1 character long.",
	}),
	resolution: z.string().min(1, {
		message: "Resolution must be at least 1 character long.",
	}),
});

export const amountOptions = [
	{ value: "1", label: "1" },
	{ value: "2", label: "2" },
	{ value: "3", label: "3" },
	{ value: "4", label: "4" },
	{ value: "5", label: "5" },
];

export const resolutionOptions = [
	{ value: "256x256", label: "256x256" },
	{ value: "512x512", label: "512x512" },
	{ value: "1024x1024", label: "1024x1024" },
];

