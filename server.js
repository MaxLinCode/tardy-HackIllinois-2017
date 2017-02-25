var admin = require('firebase-admin');
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

<<<<<<< HEAD
//var serviceAccount = require("C:/Users/Sarah/tardy-HackIllinois-2017/tardy-ccd34-firebase-adminsdk-lxytz-ab3d23dae1.json");
=======
var serviceAccount = require("./serviceAccountKey.json");
>>>>>>> 8afd24b52f6c4406ad6702fad63def6d0e574e52

app.use(express.static(path.join(__dirname, 'www')));

app.get('*', function(req,res){
<<<<<<< HEAD
	res.sendFile('www/index.html');
=======
	res.sendfile('./www/index.html');
>>>>>>> 8afd24b52f6c4406ad6702fad63def6d0e574e52
});

var server = app.listen(8080, function() {
	console.log('Server running at http://localhost:8080');
});

<<<<<<< HEAD
//admin.initializeApp({
 // credential: admin.credential.cert(serviceAccount),
 // databaseURL: "https://tardy-ccd34.firebaseio.com"
//});

=======
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tardy-ccd34.firebaseio.com"
});
>>>>>>> 8afd24b52f6c4406ad6702fad63def6d0e574e52
