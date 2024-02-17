import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BLogCard = ({ post }) => {
	return (
		<article className="w-full p-4">
			<div className="relative">
				<div className="relative w-[95%] h-[380px] mb-4">
					<Image
						className="object-cover"
						src={post?.img}
						sizes="100%"
						alt="post-image"
						fill
					/>
				</div>
				<span className="text-white absolute top-[50%] -translate-y-[50%] -right-16 rotate-90">
					{post?.createdAt.toString().slice(0, 15)}
				</span>
			</div>
			<div className="w-full text-white">
				<h2 className="text-2xl mb-4">{post?.title}</h2>
				<p className="text-gray-400 text-sm mb-4">{post?.body}</p>
				<Link className="underline cursor-pointer" href={`/blog/${post?.slug}`}>
					READ MORE
				</Link>
			</div>
		</article>
	);
};

export default BLogCard;
