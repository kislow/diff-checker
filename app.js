const express = require('express');
const app = express();
const execPHP = require('./execphp.js')();

// execPHP.phpFolder = '';

const PORT = process.env.PORT || 8080

// app.use(express.static('./'));

app.use(express.static('./'), function(request,response,next) {
	execPHP.parseFile(request.originalUrl,function(phpResult) {
		response.write(phpResult);
		response.end();
	});
});


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})