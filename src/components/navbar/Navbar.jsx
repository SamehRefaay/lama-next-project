import Link from 'next/link';
import Links from './links/Links';

const Navbar = () => {
	return (
		<div className=" w-full sticky text-white">
			<div className="h-16 w-full max-w-screen-2xl sm:w-11/12 px-4 mx-auto flex justify-between items-center ">
				<h1 className="text-3xl font-bold">
					<Link href="/">Lama</Link>
				</h1>
				<div className="hidden sm:block">
					<Links />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
