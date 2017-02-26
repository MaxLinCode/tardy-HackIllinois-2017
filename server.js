var admin = require('firebase-admin');
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

var serviceAccount = require("./serviceAccountKey.json");

app.use(express.static(path.join(__dirname, 'www')));

app.get('*', function(req,res){
	res.sendFile('./www/index.html');
});

/*app.get('/api/data', function(req,res)){
	//req input 
	//res output
	var spawn = require("child_process").spawn;
	var process = spawn('python', ["./backend/.py", arg1, arg2, arg3, arg4]);
	process.stdout.on('data', function(data){
	});
});*/

app.stdout.on('data', function(data){
}); //do stuff with returned python script
var server = app.listen(8080, function() {
	console.log('Server running at http://localhost:8080');
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tardy-ccd34.firebaseio.com"
});
