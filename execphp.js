/**
*
*/
class ExecPHP {
	/**
	*
	*/
	constructor() {
		this.phpPath = '/usr/bin/php';
		this.phpFolder = '';
	}	
	/**
	*
	*/
	parseFile(fileName,callback) {
		// var realFileName = this.phpFolder + fileName;
		
		console.log('parsing file: ' + fileName);

		var exec = require('child_process').exec;
		var cmd = fileName;
		
		exec(cmd, function(error, stdout, stderr) {
			callback(stdout);
		});
	}
}
module.exports = function() {
	return new ExecPHP();
};