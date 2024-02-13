import Image from 'next/image';

export default function Home() {
	return (
		<main className="w-full ">
			<div className=" w-full px-4 sm:w-11/12 max-w-screen-2xl mx-auto grid gap-20 md:grid-cols-2">
				<div className="w-full h-[calc(100vh-104px)] flex flex-col justify-around text-center sm:text-left text-white">
					<h1 className="text-4xl sm:text-7xl font-extrabold sm:w-1/2 ">
						Creative Thougths Agency.
					</h1>
					<p className="">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
						eius modi eaque, voluptate ducimus laborum, cum voluptas
						accusantium.
					</p>
					<div className="flex gap-4 mx-auto sm:mx-0">
						<button className="w-32 p-4 bg-blue-600 text-white border-none rounded-md">
							Learn More
						</button>
						<button className="w-32 p-4 border-none bg-white text-black rounded-md">
							Contact
						</button>
					</div>
					<div className="h-8 w-5/6 mx-auto sm:mx-0 relative items-center grayscale">
						<Image className="object-contain" src="/brands.png" alt="" fill />
					</div>
				</div>
				<div className=" relative w-full m-auto h-96 z-0">
					<Image className="object-contain" src="/hero.gif" alt="" fill />
				</div>
			</div>
		</main>
	);
}
