//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Not connect to mongodb server');
	}
	console.log('Connected');

	// --->> mengambil semua data table todos
	// db.collection('Todos').find().toArray().then((docs) => {
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch Todos', err);
	// });

	// --->> Cara mengambil find data per id
	// db.collection('Todos').find({_id: new ObjectId('59a42e9a1bf2de104001be1c')}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// --->> mengambil jumlah data
	// db.collection('Todos').find().count().then((count) => {
	// 	console.log('Todos count : ' + count);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// --->> mengambil semua data table user
	// db.collection('Users').find().toArray().then((docs) => {
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch Users', err);
	// });

	// ---> mengambil jumlah data yang bernama risman
	db.collection('Users').find({name: "risman"}).count().then((count) => {
		console.log('name risman in users count : ' + count);
	}, (err) => {
		console.log('Unable to fetch Users', err)
	});

	// --->> mengambil data yang hanya bernama risman
	db.collection('Users').find({name: "risman"}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch Users', err);
	});

	//db.close();
});