const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// --->> remove
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// --> findOneAndRemove
// Todo.findByIdAndRemove(_id: '59a5e25ac186291960110dd2').then((todo) => {
// 	console.log(todo);
// });

// --->> findByIdAndRemove
Todo.findByIdAndRemove('59a5e25ac186291960110dd2').then((todo) => {
	console.log(todo);
});