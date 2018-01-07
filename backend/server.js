const express = require('express');
app = express();
port = process.argv[2] || 8000;
bodyParser = require('body-parser');
request = require('request');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log("Server is running");
})å