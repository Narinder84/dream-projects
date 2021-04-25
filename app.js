/** @format */

var execProcess = require('./exec_process');
execProcess.result('sh temp.sh', function (err, response) {
	if (!err) {
		console.log(response);
	} else {
		console.log(err);
	}
});
