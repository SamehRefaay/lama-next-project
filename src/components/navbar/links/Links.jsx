import Link from 'next/link';
import NavLink from './navLink/NavLink';

const Links = ({ links, popupMenu = false, setOpen }) => {
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
						className="border-t w-full p-5 text-xl"
						key={link.title}
						href={link.path}
						onClick={() => setOpen(false)}
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
