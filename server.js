const express = require('express');
const app = express();

const mockUserData = [
	{ name: 'Al' },
    { name: 'John' },
];

app.get('/users', function(req, res){
	res.json({
		success: true,
		message: 'Successfully got users.',
		users: mockUserData
	});
});

app.get('/users/:id', function(req, res){
    const id = req.params.id;
	res.json({
		success: true,
		message: 'got one user.',
		user: id
	});
});

app.listen(8000, function() {
  console.log("server is running on 8000");
});