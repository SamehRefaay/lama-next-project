import React from 'react';
import Image from 'next/image';
import PostAuthor from '@/components/postauthor/PostAuthor';
import { getPost } from '@/lib/data';
import { authorImgs, images } from '@/lib/data';
// import { posts } from '@/lib/data';

const getData = async slug => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	if (!response.ok) {
		throw new Error('Some thing went wrong');
	}
	return response.json();
};

const SinglePostPage = async ({ params }) => {
	const { slug } = params;

	const post = await getPost(slug);
	// post.image = images[id - 1];

	// const post = posts.find(post => post.id === parseInt(id));

	return (
		<main className="relative z-0 w-full">
			<div className="w-11/12 max-w-screen-2xl mx-auto px-4 grid gap-6 md:gap-12 md:grid-cols-3 ">
				<div className="w-full h-[500px]">
					<Image src={post?.img} alt="Post Image" width={500} height={500} />
				</div>
				<div className="w-full text-white md:col-span-2">
					<h1 className="text-4xl font-bold mb-12">{post?.title}</h1>
					<div className="mb-14 flex flex-col-reverse gap-6 sm:flex-row sm:items-center md:gap-10 ">
						<PostAuthor userId={post?.userId} />
						<div>
							<h6 className="text-gray-400">Published</h6>
							<p>{post?.createdAt.toString().slice(0, 21)}</p>
						</div>
					</div>
					<div className="text-gray-200">{post?.desc}</div>
				</div>
			</div>
		</main>
	);
};

export default SinglePostPage;
