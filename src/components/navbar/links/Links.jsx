'use client';
import Link from 'next/link';
import NavLink from './navLink/NavLink';

const Links = ({ links, popupMenu = false, handleClick }) => {
	return (
		<nav
			className={
				popupMenu
					? 'h-full items-center flex flex-col text-center'
					: 'h-full items-center flex gap-6 '
			}
		>
			{links.map(link =>
				popupMenu ? (
					<Link
						href={link.path}
						className="border-t border-blue-500 hover:bg-[var(--bg)] w-full p-5 text-xl"
						key={link.title}
						onClick={handleClick}
					>
						{link.title}
					</Link>
				) : (
					<NavLink key={link.title} item={link} />
				)
			)}
		</nav>
	);
};

export default Links;
