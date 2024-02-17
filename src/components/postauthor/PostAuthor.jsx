import Image from 'next/image';
import React from 'react';
import { authorImgs, getUser } from '@/lib/data';

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
	// const author = await getAuthor(userId);
	// author.image = authorImgs[userId - 1];

	const author = await getUser(userId);
	const noAvatar =
		'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';

	return (
		<div className="flex gap-6 items-center">
			<Image
				className="rounded-full w-[80px] h-[80px] object-fill "
				src={author.img ? author?.img : noAvatar}
				alt="Author Image"
				width={100}
				height={100}
			/>
			<div>
				<h6 className="text-gray-400">Author</h6>
				<p>{author?.username}</p>
			</div>
		</div>
	);
};

export default PostAuthor;
