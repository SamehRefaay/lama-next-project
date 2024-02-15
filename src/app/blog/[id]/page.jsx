import React from 'react';
import { authorImgs, images } from '@/lib/data';
import Image from 'next/image';
import PostAuthor from '@/components/postauthor/PostAuthor';
// import { posts } from '@/lib/data';

const getPost = async postId => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	if (!response.ok) {
		throw new Error('Some thing went wrong');
	}
	return response.json();
};

const SinglePostPage = async ({ params }) => {
	const { id } = params;

	let post = await getPost(id);
	post.image = images[id - 1];

	// const post = posts.find(post => post.id === parseInt(id));

	return (
		<main className="relative z-0 w-full">
			<div className="w-11/12 max-w-screen-2xl mx-auto px-4 grid gap-6 md:gap-12 md:grid-cols-3 ">
				<div className="w-full h-[500px]">
					<Image src={post?.image} alt="Post Image" width={500} height={500} />
				</div>
				<div className="w-full text-white md:col-span-2">
					<h1 className="text-4xl font-bold mb-12">{post?.title}</h1>
					<div className="flex gap-6 md:gap-10 items-center mb-14">
						<PostAuthor userId={post.userId} />
						<div>
							<h6 className="text-gray-400">Published</h6>
							<p>{'Feb 14 2024'}</p>
						</div>
					</div>
					<div className="text-gray-200">{post.body}</div>
				</div>
			</div>
		</main>
	);
};

export default SinglePostPage;
