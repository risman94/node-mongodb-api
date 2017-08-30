const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// });

var hashedPassword = '$2a$10$C3WMsu/bH6C2VraQKyBR9OeShdyFjggmv2tMsaqXjTKUc1w.TDT2G';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
});

// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);
// var decode = jwt.verify(token, '123abc');
// console.log('decode', decode);

// var message = 'i am user number 3';
// var hash = SHA256(message).toString();

// console.log('message : ' + message);
// console.log('hash : ' + hash);

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString()

// var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resulthash === token.hash) {
// 	console.log('data was not changed');
// } else {
// 	console.log('data was changed. do not trust!');
// }