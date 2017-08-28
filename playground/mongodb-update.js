//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Not connect to mongodb server');
	}
	console.log('Connected');

	// ---> update field complite in data table todos
	// db.collection('Todos').findOneAndUpdate(
	// 	{_id: new ObjectId('59a477cad865e170ce461525')
	// 	}, {
	// 		$set: {complite: true}
	// 	}, {
	// 		returnOriginal: false
	// 	}).then((result) => {
	// 	console.log(result);
	// });

	// --->> update field name and age in data table users
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectId('59a484d3d865e170ce4616b5')
	}, {
		$set: {name: "indy"}, $inc: {age: -2}
	}, {
		returnOriginal: "risman"
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});