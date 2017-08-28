//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Not connect to mongodb server');
	}
	console.log('Connected');

	// --->> delete many data table todos
	// db.collection('Todos').deleteMany({text: 'whatever'}).then((result) => {
	// 	console.log(result);
	// });

	// --->> delete one data table todos
	// db.collection('Todos').deleteOne({text: 'whatever'}).then((result) => {
	// 	console.log(result);
	// });

	// --->> find one and delete data table todos
	// db.collection('Todos').findOneAndDelete({complite: false}).then((result) => {
	// 	console.log(result);
	// });

	// --->> delete many data table users
	db.collection('Users').deleteMany({name: "risman"});

	// ---> find one and delete data table users
	db.collection('Users').findOneAndDelete({_id : new ObjectId('59a47d4cd865e170ce4615d1')}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

	//db.close();
});