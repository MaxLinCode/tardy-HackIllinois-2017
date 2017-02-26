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
sendInvites("0mAwO57HKoNB1DP8S1CNwtvEOMr1", "Ian Renfro", 43200, "Thomas M. Siebel Center for Computer Science")
