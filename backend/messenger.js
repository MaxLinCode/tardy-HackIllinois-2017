console.log('start');
function sendInvites(userId, targets, time, place) {
	var spawn = require('child_process').spawn,
	    py    = spawn('python', ['messenger.py']),
	    data = [userId, targets, time, place],
	    dataString = '';
	
	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});
	py.stdout.on('end', function(){
	  console.log('done');
	});
	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
}

sendInvites("kijZjJJ5ozPZxfeHYfjh3zd3TUh1", "Janice",  43200, "Thomas M. Siebel Center for Computer Science");
console.log('finished');
