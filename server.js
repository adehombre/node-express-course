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

app.listen(8000, function() {
  console.log("server is running on 8000");
});