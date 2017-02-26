var config = {
    apiKey: "AIzaSyDiL1XGJxQqqd8WCnwx6FQvzapSphklSmk",
    authDomain: "tardy-ccd34.firebaseapp.com",
    databaseURL: "https://tardy-ccd34.firebaseio.com",
    storageBucket: "tardy-ccd34.appspot.com",
    serviceAccount: "tardy-ccd34-firebase-adminsdk-lxytz-ab3d23dae1.json"
    };

firebase.initializeApp(config);
var db = firebase.database();
console.log(firebase.app().name);
function addEntry(userId, target, expected, actual) {
	db.ref().child('users/' + userId).child(target).push([expected, actual]);
	console.log("nooooooooooooooooooo");
}
