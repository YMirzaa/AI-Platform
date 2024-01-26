import Image from "next/image";

interface IEmptyComponentProps {
	label: string;
}

const EmptyComponent = ({ label }: IEmptyComponentProps) => {
	return (
		<div className='h-full p-10 flex flex-col items-center justify-center'>
			<div className='relative h-72 w-72'>
				<Image src='/images/empty.png' alt='Empty' fill />
			</div>
			<p className='text-sm text-center text-gray-500'>{label}</p>
		</div>
	);
};

export default EmptyComponent;

