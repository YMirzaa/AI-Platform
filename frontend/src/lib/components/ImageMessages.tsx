"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { Download } from "lucide-react";
import EmptyComponent from "./EmptyComponent";

const ImageMessages = ({ imageUrls }: { imageUrls: string[] }) => {
	return imageUrls.length === 0 ? (
		<EmptyComponent label='No images generated yet.' />
	) : (
		<div className='md:flex gap-4 grid grid-cols-2 '>
			{imageUrls.map((image: any) => {
				return (
					<Card className='p-0 lg:p-4 ' key={image.url}>
						<CardBody className='flex items-center'>
							<Image
								src={image.url}
								alt='Generated Image'
								width={240}
							/>
						</CardBody>
						<CardFooter>
							<Button
								color='secondary'
								className='w-full'
								onClick={() => {
									window.open(image.url, "_blank");
								}}
							>
								<Download size={16} />
								Download
							</Button>
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
};

export default ImageMessages;

