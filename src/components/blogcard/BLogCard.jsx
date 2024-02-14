import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BLogCard = ({ post }) => {
	return (
		<div className="w-full p-4">
			<div className="relative">
				<div className="relative flex w-[95%] h-[380px] mb-4">
					<Image
						className="object-cover"
						src={post?.image}
						alt="post-image"
						fill
					/>
				</div>
				<span className="text-white absolute top-[50%] -translate-y-[50%] -right-11 rotate-90">
					Feb 12 2024
				</span>
			</div>
			<div className="w-full text-white">
				<h2 className="text-2xl mb-4">{post.title}</h2>
				<p className="text-gray-400 text-sm mb-4">{post.body}</p>
				<Link className="underline" href={`/blog/${post.id}`}>
					READ MORE
				</Link>
			</div>
		</div>
	);
};

export default BLogCard;
