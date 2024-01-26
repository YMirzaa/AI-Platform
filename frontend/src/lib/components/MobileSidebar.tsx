"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/lib/components/ui/sheet";
import Sidebar from "@/lib/components/Sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
	// Hydration error fix
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) return null;

	return (
		<Sheet>
			<SheetTrigger>
				<Menu size={24} className='md:hidden' />
			</SheetTrigger>
			<SheetContent side='left' className='p-0'>
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;

