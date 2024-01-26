"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Input, Spinner } from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";

import { loginUserAction } from "@/lib/actions/authenticationAction";
import { EyeFilledIcon } from "@/lib/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/lib/icons/EyeSlashedFilledIcon";

import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			aria-disabled={pending}
			disabled={pending}
			isLoading={pending}
			spinner={<Spinner color='white' />}
			color='danger'
			className='max-w-xs w-full'
		>
			Giriş Yap
		</Button>
	);
}

export default function SignInForm() {
	const [formState, formAction] = useFormState(loginUserAction, {
		status: "Idle",
		message: null,
		errors: undefined,
	});
	const ref = useRef<HTMLFormElement>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	useEffect(() => {
		switch (formState.status) {
			case "Error":
				toast.error(
					`${formState.message}:\n Check your credentials and try again.`
				);
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
			className=' flex flex-col gap-2 p-2 '
		>
			<h1 className='text-lg font-bold'>Sign In</h1>

			<Input
				isRequired
				name='username'
				variant='bordered'
				autoComplete='off'
				isInvalid={!!formState.errors?.username}
				errorMessage={formState.errors?.username}
				type='text'
				label='Kullanıcı Adı / E-Posta'
				className='max-w-xs'
			/>

			<Input
				isRequired
				name='password'
				label='Şifre'
				variant='bordered'
				isInvalid={!!formState.errors?.password}
				errorMessage={formState.errors?.password ?? ""}
				endContent={
					<button
						className='focus:outline-none'
						type='button'
						onClick={toggleVisibility}
					>
						{isVisible ? (
							<EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
						) : (
							<EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
						)}
					</button>
				}
				type={isVisible ? "text" : "password"}
				className='max-w-xs'
			/>

			<SubmitButton />
		</form>
	);
}

