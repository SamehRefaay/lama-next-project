import { connectToMongo } from './utils';
import { Post, User } from './models';

export const getPosts = async () => {
	try {
		connectToMongo();
		const posts = await Post.find();
		return posts;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch posts!');
	}
};

// fetch post by its slug
export const getPost = async slug => {
	try {
		connectToMongo();
		const post = await Post.findOne({ slug });
		return post;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch post!');
	}
};

// fetch all users
export const getUsers = async id => {
	try {
		connectToMongo();
		const users = await User.find();
		return users;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch users!');
	}
};

// fetch user by its slug
export const getUser = async id => {
	try {
		connectToMongo();
		const user = await User.findById(id);
		return user;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch user!');
	}
};

export const images = [
	'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1310&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
// 'https://plus.unsplash.com/premium_photo-1676106623769-539ecc6d7f92?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

export const authorImgs = [
	'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export const posts = [
	{ id: 1, title: 'title 1', desc: 'description 1', image: images[0] },
	{ id: 2, title: 'title 2', desc: 'description 2', image: images[1] },
	{ id: 3, title: 'title 3', desc: 'description 3', image: images[2] },
	{ id: 4, title: 'title 4', desc: 'description 4', image: images[3] },
	{ id: 5, title: 'title 5', desc: 'description 5', image: images[4] },
	{ id: 6, title: 'title 6', desc: 'description 6', image: images[5] },
	{ id: 7, title: 'title 7', desc: 'description 7', image: images[6] },
];
export const authors = [
	{ id: 1, name: 'Sameh Refaay', desc: 'description 1', image: authorImgs[0] },
	{ id: 2, name: 'Marwa Nazeih', desc: 'description 2', image: authorImgs[1] },
	{ id: 3, name: 'Mohamed Sameh', desc: 'description 3', image: authorImgs[2] },
	{ id: 4, name: 'Yousef Sameh', desc: 'description 4', image: authorImgs[3] },
	{ id: 5, name: 'John Weik', desc: 'description 5', image: authorImgs[4] },
	{ id: 6, name: 'Tomas Amazon', desc: 'description 6', image: authorImgs[5] },
	{ id: 7, name: 'Green Fisher', desc: 'description 7', image: authorImgs[6] },
];
