import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/lib/components/ui/avatar";
import MobileSidebar from "@/lib/components/MobileSidebar";

const Navbar = () => {
	return (
		<div className='flex items-center p-4'>
			<MobileSidebar />
			<div className='flex w-full justify-end'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};
export default Navbar;

