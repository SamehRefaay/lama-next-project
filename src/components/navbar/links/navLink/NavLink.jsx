'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
	const pathName = usePathname();
	return (
		<Link
			className={`w-[120px] text-center py-2 rounded-3xl ${
				pathName === item.path ? 'bg-white text-black' : 'text-white bg-inherit'
			}`}
			href={item.path}
		>
			{item.title}
		</Link>
	);
};

export default NavLink;
