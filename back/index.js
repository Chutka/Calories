
var express = require('express');
var app = express();

var fs = require('fs');
app.engine('html', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    
    var rendered =content.toString();
    console.log(content.toString());
    return callback(null, rendered);
  });
});

app.set('views', '../'); 
app.set('view engine', 'html'); 

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



