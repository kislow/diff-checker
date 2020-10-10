const express = require('express');
const app = express();
const ExecPHP = require('./assets/compare/execphp.js')();

ExecPHP.phpFolder = '';

const PORT = process.env.PORT || 8080;

app.use(express.static('./'));

app.use('*.php', function(request,response,next) {
	ExecPHP.parseFile(request.originalUrl,function(phpResult) {
		response.write(phpResult);
		response.end();
	});
});


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});