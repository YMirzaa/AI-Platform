"use client";

import { useState } from "react";

import { Code } from "lucide-react";

import ChatMessages from "@/lib/components/ChatMessages";
import Heading from "@/lib/components/Heading";
import CodeForm from "@/lib/components/forms/CodeForm";

export interface IChatMessage {
	role: string;
	content: string;
}

const CodePage = () => {
	const [messages, setMessages] = useState<IChatMessage[]>([
		{
			role: "system",
			content:
				"You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.",
		},
	]);
	return (
		<div>
			<Heading
				title='Code'
				description='Generate Code with AI'
				icon={Code}
				iconColor='text-green-700'
				bgColor='bg-green-700/10'
			/>

			<CodeForm messages={messages} setMessages={setMessages} />
			<div className='p-4'>
				<ChatMessages messages={messages} />
			</div>
		</div>
	);
};

export default CodePage;

