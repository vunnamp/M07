var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();  // make express app
var http = require('http').Server(app);
app.get('/',function(req,res){
res.send('Hello World!! first code')
});
// set up the view engine
// manage our entries
// set up the logger
// GETS
// POSTS
// 404

// Listen for an application request on port 8081
http.listen(8081, function () {
  console.log('Guestbook app listening on http://127.0.0.1:8081/');
});
