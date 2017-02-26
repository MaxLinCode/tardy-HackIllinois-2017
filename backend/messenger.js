function sendInvites(userId, targets, time, place) {
	var spawn = require('child_process').spawn,
	    py    = spawn('python', ['messenger.py']),
	    data = [userId, targets, time, place],
	    dataString = '';

	py.stdout.on('end', function(){
	});
	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
}

sendInvites("kijZjJJ5ozPZxfeHYfjh3zd3TUh1", "Janice",  43200, "Thomas M. Siebel Center for Computer Science");
