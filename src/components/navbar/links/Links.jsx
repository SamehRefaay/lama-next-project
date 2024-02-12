import NavLink from './navLink/NavLink';

const links = [
	{ title: 'Home', path: '/' },
	{ title: 'About', path: '/about' },
	{ title: 'Contact', path: '/contact' },
	{ title: 'Blog', path: '/blog' },
];
const Links = () => {
	return (
		<nav className="h-full items-center flex gap-6 ">
			{links.map(link => (
				<NavLink key={link.title} item={link} />
			))}
		</nav>
	);
};

export default Links;
