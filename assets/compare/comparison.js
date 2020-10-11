const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const obj = () => { 
    app.post('/data', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});
};

var original = string.split('\n', obj([original]));
var modified = string.split('\n', obj([modified]));
var response = '';

var n = 0;
var s = 0;

var originalCount = Object.keys(original).length;
var modifiedCount = Object.keys(modified).length;


if (originalCount > modifiedCount) {
    var n = originalCount;
    var s = modifiedCount;
} else {
    var n = modifiedCount;
    var s = originalCount;
}

var strcmp = new Intl.Collator(undefined, {numeric:true, sensitivity:'base'}).compare;

for (var i=0; i<n; i++) {
    if (i < n) {
        
    }

}

// sample string comparison
// var str1 = "ab";
// var str2 = "cd";
// var n = str1.localeCompare(str2);

