"use client";

import EmptyComponent from "./EmptyComponent";
import { IChatMessage } from "@/app/(protected)/conversation/page";

import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";

const ChatMessages = ({ messages }: { messages: IChatMessage[] }) => {
	const pathname = usePathname();
	return messages.length === 0 ? (
		<EmptyComponent label='No conversation started yet.' />
	) : (
		<div className='flex flex-col-reverse gap-y-4'>
			{messages.map((message: any) => {
				if (message.role === "system") {
					return;
				}
				return (
					<div
						className={`p-8 w-full flex items-start gap-x-8 rounded-lg ${
							message.role === "user"
								? "bg-white border border-black/10 "
								: "bg-muted"
						}`}
						key={message.content}
					>
						<p>
							{pathname === "/code" ? (
								<ReactMarkdown
									components={{
										pre: ({ node, ...props }: any) => (
											<pre
												{...props}
												className='bg-black/10 p-4 rounded-lg'
											/>
										),
										code: ({ node, ...props }: any) => (
											<code
												{...props}
												className='rounded-lg'
											/>
										),
									}}
								>
									{message.content}
								</ReactMarkdown>
							) : (
								message.content
							)}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default ChatMessages;

