import React from "react";

import SignInForm from "@/lib/components/forms/SignInForm";
export default function LoginPage() {
	return (
		<div className='flex items-center justify-center h-full '>
			<div className='border-black/10 border-solid border-2 rounded-lg'>
				<SignInForm />
			</div>
		</div>
	);
}

