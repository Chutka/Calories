var express = require('express');
var app = express();

var main = require('./main');//router


var fs = require('fs');
app.engine('html', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    
    var rendered =content.toString();
    return callback(null, rendered);
  });
});

app.set('views', '../templates'); 
app.set('view engine', 'html'); 

app.use('/aa',main);


app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});



