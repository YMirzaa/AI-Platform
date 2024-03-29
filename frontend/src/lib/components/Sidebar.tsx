"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	Code,
	ImageIcon,
	LayoutDashboard,
	MessageSquare,
	Music,
	Settings,
	VideoIcon,
} from "lucide-react";

const routes = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: LayoutDashboard,
		color: "text-sky-500",
	},
	{
		label: "Conversation",
		icon: MessageSquare,
		href: "/conversation",
		color: "text-violet-500",
	},
	{
		label: "Image Generation",
		icon: ImageIcon,
		href: "/image",
		color: "text-pink-500",
	},
	{
		label: "Video Generation",
		icon: VideoIcon,
		href: "/video-generation",
		color: "text-orange-500",
	},
	{
		label: "Music Generation",
		icon: Music,
		href: "/music-generation",
		color: "text-emeral-500",
	},
	{
		label: "Code Generation",
		icon: Code,
		href: "/code",
		color: "text-green-700",
	},
	{
		label: "Settings",
		icon: Settings,
		href: "/settings",
	},
];

const Sidebar = () => {
	const pathname = usePathname();
	return (
		<div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
			<div className='px-3 py-2 flex-1'>
				<Link
					href='/dashboard'
					className='flex items-center pl-3 mb-14'
				>
					<div className='relative w-8 h-8 mr-4'>
						<Image fill alt='logo' src='/next.svg' />
					</div>
					<h1 className='text-2xl font-bold'> Istanbul</h1>
				</Link>
				<div className='space-y-1'>
					{routes.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className={`text-sm flex w-full p-3 justify-start font-medium rounded-lg transition cursor-pointer hover:text-white hover:bg-white/10 ${
								pathname === route.href
									? "bg-white/10 text-white"
									: ""
							}`}
						>
							<div className='flex items-center flex-1'>
								<route.icon
									className={`w-6 h-6 mr-4 ${route.color}`}
								/>
								<span>{route.label}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

