//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Not connect to mongodb server');
	}
	console.log('Connected');
	// db.collection('Todos').insertOne({
	// 	text: 'some this text',
	// 	complite: false
	// }, (err, result) => {
	// 	if(err) {
	// 		console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	_id: 2,
	// 	name: 'risman',
	// 	age: 23,
	// 	location: 'mataram'
	// }, (err, result) => {
	// 	if(err) {
	// 		console.log('Unable to insert user todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	db.close();
});