"use client";
import ChatMessages from "@/lib/components/ChatMessages";
import Heading from "@/lib/components/Heading";
import ConversationForm from "@/lib/components/forms/ConversationForm";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

export interface IChatMessage {
	role: string;
	content: string;
}

const ConversationPage = () => {
	const [messages, setMessages] = useState<IChatMessage[]>([]);
	return (
		<div>
			<Heading
				title='Conversation'
				description='Generate conversation with AI'
				icon={MessageSquare}
				iconColor='text-violet-500'
				bgColor='bg-violet-500/10'
			/>
			{/* <h1>Conversation Page</h1> */}

			<ConversationForm messages={messages} setMessages={setMessages} />
			<ChatMessages messages={messages} />
		</div>
	);
};

export default ConversationPage;

