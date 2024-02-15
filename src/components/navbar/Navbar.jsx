'use client';
import Link from 'next/link';
import Links from './links/Links';
import Image from 'next/image';
import { useState } from 'react';

const links = [
	{ title: 'Home', path: '/' },
	{ title: 'About', path: '/about' },
	{ title: 'Contact', path: '/contact' },
	{ title: 'Blog', path: '/blog' },
];
const Navbar = () => {
	const [open, setOpen] = useState(true);
	const [className, setClassName] = useState('hidden');

	const toggleDrawer = () => {
		setOpen(!open);
		const drawerClasses =
			'absolute top-0 w-1/2 h-screen bg-blue-600 text-white';
		if (open) {
			setClassName(drawerClasses + ' left-[0] animate-openmenu');
		} else {
			setClassName(drawerClasses + ' left-[-50%] animate-closemenu');
		}
	};

	return (
		<div className="z-10 w-full sticky text-white">
			<div className="h-16 w-full max-w-screen-2xl sm:w-11/12 px-4 mx-auto flex justify-between items-center ">
				<h1 className="text-3xl font-bold">
					<Link href="/">Lama</Link>
				</h1>
				<div className="hidden sm:block">
					{/* nav links */}
					<nav className="h-full items-center flex gap-3">
						<Links links={links} />
					</nav>
				</div>
				{/* popup menu button */}
				<button className="sm:hidden relative w-7 h-7" onClick={toggleDrawer}>
					<Image src="/menu.png" alt="menu" fill sizes="100%" />
				</button>
			</div>
			{/* popup menu */}
			<div className={className}>
				<h1 className="w-full h-40 grid place-content-center text-3xl font-bold">
					<Link href="/">Lama</Link>
				</h1>
				<Links links={links} popupMenu={true} handleClick={toggleDrawer} />
			</div>
		</div>
	);
};

export default Navbar;
