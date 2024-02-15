import React, { cache } from 'react';
import BLogCard from '../../components/blogcard/BLogCard';
import { images } from '@/lib/data';

const getData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'no-store',
	});
	if (!response.ok) {
		throw new Error('Some thing went wrong');
	}
	return response.json();
};

const BlogPage = async () => {
	const posts = await getData();
	const filiteredPosts = posts.slice(0, 7).map((post, i) => {
		post.image = images[i];
		return post;
	});

	return (
		<main className="relative w-full z-0">
			<div className="w-11/12 max-w-screen-2xl mx-auto px-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{filiteredPosts.map(post => (
					<BLogCard key={post.id} post={post} />
				))}
			</div>
		</main>
	);
};

export default BlogPage;
