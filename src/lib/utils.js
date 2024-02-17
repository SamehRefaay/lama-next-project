const mongoose = require('mongoose');

const connection = {};

const DATABASE_URL = process.env.MONGO;
console.log(DATABASE_URL);

if (!DATABASE_URL) {
	console.log('please define the database url');
}
export const connectToMongo = async () => {
	try {
		if (connection.isConnected) {
			console.log('Connected to existing Database');
			return;
		}
		const db = await mongoose.connect(DATABASE_URL);
		connection.isConnected(db.connection[0].readyState);
		console.info('Connected to Mongo Successfully');
	} catch (error) {
		console.log(error);
	}
};
