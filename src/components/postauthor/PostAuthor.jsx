import Image from 'next/image';
import React from 'react';
import { authorImgs } from '@/lib/data';

const getAuthor = async userId => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);
	if (!response.ok) {
		throw new Error('Some thing went wrong');
	}
	return response.json();
};

const PostAuthor = async ({ userId }) => {
	const author = await getAuthor(userId);

	author.image = authorImgs[userId - 1];

	return (
		<>
			<Image
				className="rounded-full w-[80px] h-[80px] object-fill "
				src={author?.image}
				alt="Author Image"
				width={100}
				height={100}
			/>
			<div>
				<h6 className="text-gray-400">Author</h6>
				<p>{author.name}</p>
			</div>
		</>
	);
};

export default PostAuthor;
