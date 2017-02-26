function sendInvites(userId, target, time, place) {
	var PythonShell = require('python-shell');
	
	var options = {
	  mode: 'text',
	  pythonPath: '/usr/bin/python3.4',
	  pythonOptions: [],
	  scriptPath: './',
	  args: [userId, target, time, place]
	};
	
	PythonShell.run('messenger.py', options, function (err, results) {
	  if (err) throw err;
	  // results is an array consisting of messages collected during execution
	  console.log('results: %j', results);
	});

}
sendInvites("PySYUaC1daQ7lezQ9HhvfV5Xdv73", "Audrey", 43200, "Thomas M. Siebel Center for Computer Science")
