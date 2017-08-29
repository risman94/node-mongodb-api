const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// ---> User
var id = '59a52b429125a725a831b0d3';

if (!ObjectId.isValid(id)) {
	console.log('id not valid');
}

User.findById(id).then((user) => {
	if (!user) {
		return console.log('Id not found');
	}
	console.log('User', user);
}).catch((e) => console.log(e));

// --->> Todo
// var id = '59a559037c51051b105da82e1';

// if (!ObjectId.isValid(id)) {
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));