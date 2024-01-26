"use client";
import { Card } from "@/lib/components/ui/card";
import {
	MessageSquare,
	ArrowRight,
	Music,
	ImageIcon,
	VideoIcon,
	Code,
} from "lucide-react";

import { useRouter } from "next/navigation";

const tools = [
	{
		label: "Conversation",
		icon: MessageSquare,
		href: "/conversation",
		color: "text-violet-500",
		bgColor: "bg-violet-500/10",
	},
	{
		label: "Music Generation",
		icon: Music,
		href: "/music-generation",
		color: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
	},
	{
		label: "Image Generation",
		icon: ImageIcon,
		href: "/image",
		color: "text-pink-500",
		bgColor: "bg-pink-500/10",
	},
	{
		label: "Video Generation",
		icon: VideoIcon,
		href: "/video-generation",
		color: "text-orange-500",
		bgColor: "bg-orange-500/10",
	},
	{
		label: "Code Generation",
		icon: Code,
		href: "/code",
		color: "text-green-500",
		bgColor: "bg-green-500/10",
	},
];

export default function DashboardPage() {
	const router = useRouter();
	return (
		<div>
			<div className='mb-8 space-y-4'>
				<h2 className='text-2xl md:text-4xl font-bold text-center'>
					Explore power of AI
				</h2>
				<p className='font-light text-sm md:text-lg text-center'>
					Chat with powerful AI
				</p>
			</div>
			<div className='px-4 md:px-20 lg:px-32 space-y-4'>
				{tools.map((tool) => (
					<Card
						onClick={() => router.push(tool.href)}
						key={tool.href}
						className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
					>
						<div className='flex items-center gap-x-4'>
							<div
								className={`p-2 w-fit rounded-md ${tool.bgColor}`}
							>
								<tool.icon
									className={`w-8 h-8 ${tool.color}`}
								/>
							</div>
							<div className='font-semibold'>{tool.label}</div>
						</div>
						<ArrowRight className='w-5 h-5' />
					</Card>
				))}
			</div>
		</div>
	);
}

