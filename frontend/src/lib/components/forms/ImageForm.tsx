"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Input, Select, SelectItem, Spinner } from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";

import { toast } from "react-toastify";
import { IChatMessage } from "@/app/(protected)/conversation/page";
import { imageAction } from "@/lib/actions/imageAction";
import { amountOptions, resolutionOptions } from "@/lib/schemas/imageSchema";

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

export default function ImageForm({
	imageUrls,
	setImageUrls,
}: {
	imageUrls: string[];
	setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
}) {
	const [formState, formAction] = useFormState(imageAction, {
		status: "Idle",
		errors: undefined,
		data: imageUrls,
		message: "",
	});
	const ref = useRef<HTMLFormElement>(null);
	useEffect(() => {
		switch (formState.status) {
			case "Success":
				setImageUrls([...formState.data!]);
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
			className=' rounded-lg border p-4 space-y-4 '
		>
			<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4'>
				<Input
					isRequired
					name='prompt'
					isInvalid={!!formState.errors?.prompt}
					errorMessage={formState.errors?.prompt}
					type='text'
					placeholder='A picture of a man in desert.'
					className='md:col-span-2 lg:col-span-4'
				/>

				<Select
					name='amount'
					isInvalid={!!formState.errors?.amount}
					errorMessage={formState.errors?.amount}
					items={amountOptions}
					defaultSelectedKeys={[amountOptions[0].value as string]}
					label='Amount'
				>
					{amountOptions.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</Select>
				<Select
					name='resolution'
					isInvalid={!!formState.errors?.resolution}
					errorMessage={formState.errors?.resolution}
					items={resolutionOptions}
					defaultSelectedKeys={[resolutionOptions[0].value as string]}
					label='Resolution'
					className=''
				>
					{resolutionOptions.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</Select>
			</div>

			<SubmitButton />
		</form>
	);
}

