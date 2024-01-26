"use client";

import { Card, CardBody } from "@nextui-org/card";
import EmptyComponent from "./EmptyComponent";
import { Image } from "@nextui-org/image";

const ImageMessages = ({ imageUrls }: { imageUrls: string[] }) => {
	return imageUrls.length === 0 ? (
		<EmptyComponent label='No images generated yet.' />
	) : (
		<div className=''>
			{imageUrls.map((image: any) => {
				return (
					<Card className='p-4' key={image.url}>
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

