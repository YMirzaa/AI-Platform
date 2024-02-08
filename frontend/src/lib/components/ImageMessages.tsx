"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import EmptyComponent from "./EmptyComponent";

const ImageMessages = ({ imageUrls }: { imageUrls: string[] }) => {
	return imageUrls.length === 0 ? (
		<EmptyComponent label='No images generated yet.' />
	) : (
		<div className='md:flex gap-4 grid grid-cols-2'>
			{imageUrls.map((image: any) => {
				return (
					<Card className='p-0 lg:p-4' key={image.url}>
						<CardBody>
							<Image
								src={image.url}
								alt='Generated Image'
								width={240}
							/>
						</CardBody>
					</Card>
				);
			})}
		</div>
	);
};

export default ImageMessages;

