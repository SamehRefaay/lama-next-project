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
	const [open, setOpen] = useState(false);
	console.log(open);
	return (
		<div className="w-full sticky text-white">
			<div className="h-16 w-full max-w-screen-2xl sm:w-11/12 px-4 mx-auto flex justify-between items-center ">
				<h1 className="text-3xl font-bold">
					<Link href="/">Lama</Link>
				</h1>
				<div className="hidden sm:block">
					{/* nav links */}
					<nav className="h-full items-center flex gap-6 ">
						<Links links={links} />
					</nav>
				</div>
				{/* popup menu button */}
				<button
					className="sm:hidden relative w-7 h-7"
					onClick={() => setOpen(!open)}
				>
					<Image src="/menu.png" alt="menu" fill />
				</button>
			</div>
			{/* popup menu */}
			<div
				className={
					open
						? 'absolute top-0 left-0 w-1/2 h-[80vh] bg-white text-black animate-openmenu'
						: 'absolute top-0 left-[-224px] h-[80vh] bg-white text-black animate-closemenu'
				}
			>
				<h1 className="p-4 text-4xl font-bold">
					<Link href="/">Lama</Link>
				</h1>
				<Links links={links} popupMenu={true} setOpen={setOpen} />
			</div>
		</div>
	);
};

export default Navbar;
