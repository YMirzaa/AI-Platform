"use client";

import { useState } from "react";

import { ImageIcon } from "lucide-react";

// import ChatMessages from "@/lib/components/ChatMessages";
import Heading from "@/lib/components/Heading";
import ImageForm from "@/lib/components/forms/ImageForm";
import ImageMessages from "@/lib/components/ImageMessages";
// import CodeForm from "@/lib/components/forms/CodeForm";

export interface IChatMessage {
	role: string;
	content: string;
}

const ImagePage = () => {
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	return (
		<div>
			<Heading
				title='Image Generation'
				description='Turn your text into an image'
				icon={ImageIcon}
				iconColor='text-pink-700'
				bgColor='bg-pink-700/10'
			/>
			<div className='px-2 space-y-2'>
				<ImageForm imageUrls={imageUrls} setImageUrls={setImageUrls} />
				<ImageMessages imageUrls={imageUrls} />
			</div>
		</div>
	);
};

export default ImagePage;

