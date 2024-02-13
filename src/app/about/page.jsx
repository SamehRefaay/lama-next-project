import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
	return (
		<main className="w-full">
			{/* container */}
			<div className="w-11/12 mx-auto px-4 max-w-screen-2xl grid md:grid-cols-2 gap-20">
				{/* text container left side */}
				<div className="flex flex-col w-full h-[calc(100vh-104px)] overflow-hidden justify-evenly text-white text-center sm:text-left">
					<h4 className="text-xl font-bold text-blue-600">About Agency</h4>
					<h1 className="text-3xl sm:text-5xl font-bold">
						We create digital ideas that are bigger, bolder, braver and better
					</h1>
					<p className="text-sm sm:text-base text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						obcaecati quae neque fugit, placeat aperiam! Amet numquam magni,
						distinctio quaerat sapiente officiis atque quo, asperiores in,
						excepturi dolore ea? Quas?
					</p>
					<div className="grid justify-center gap-4 text-center sm:gap-3 sm:grid-cols-3 sm:text-left">
						<div>
							<h2 className="text-3xl font-extrabold text-blue-600">10 K+</h2>
							<p className="text-sm">Years of experience</p>
						</div>
						<div>
							<h2 className="text-3xl font-extrabold text-blue-600">234 K+</h2>
							<p className="text-sm">People reached</p>
						</div>
						<div>
							<h2 className="text-3xl font-extrabold text-blue-600">5 K+</h2>
							<p className="text-sm">Services and plugins</p>
						</div>
					</div>
				</div>
				{/* img contianer right side */}
				<div className="relative w-full h-[400px] m-auto">
					<Image className="object-contain" src="/about.png" alt="" fill />
				</div>
			</div>
		</main>
	);
};

export default AboutPage;
