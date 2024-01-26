"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Input, Spinner } from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";

import { loginUserAction } from "@/lib/actions/authenticationAction";
import { EyeFilledIcon } from "@/lib/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/lib/icons/EyeSlashedFilledIcon";

import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";
import { conversationAction } from "@/lib/actions/conversationAction";
import { IChatMessage } from "@/app/(protected)/conversation/page";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			aria-disabled={pending}
			disabled={pending}
			isLoading={pending}
			spinner={<Spinner color='white' />}
			color='primary'
			className='w-full'
		>
			Generate
		</Button>
	);
}

export default function ConversationForm({
	messages,
	setMessages,
}: {
	messages: IChatMessage[];
	setMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}) {
	const [formState, formAction] = useFormState(conversationAction, {
		status: "Idle",
		errors: undefined,
		data: messages,
		message: "",
	});
	const ref = useRef<HTMLFormElement>(null);
	useEffect(() => {
		switch (formState.status) {
			case "Success":
				setMessages([...formState.data!]);
				ref.current?.reset();
				break;
			case "Error":
				toast.error(`${formState.message}: ${formState.errors}`);
				ref.current?.reset();
				break;
			default:
				break;
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formState]);

	return (
		<form
			ref={ref}
			action={formAction}
			autoComplete='off'
			className='rounded-lg border p-4 space-y-4 '
		>
			<Input
				isRequired
				name='prompt'
				isInvalid={!!formState.errors?.prompt}
				errorMessage={formState.errors?.prompt}
				type='text'
				placeholder='How many people live in the world?'
			/>

			<SubmitButton />
		</form>
	);
}

