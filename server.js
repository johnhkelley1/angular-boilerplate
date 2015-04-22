var express = require('express');
var bodyParser = require('body-parser');
var app = express();  

//Set public directory
app.use(express.static(__dirname + '/public'));

//Use bodyparser
app.use(bodyParser());

app.get('*', function(req, res) {
	res.sendfile('./public/index.html'); // load singe page front end
});

app.listen(8000);
console.log("App listening on port 8000");