const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { test, test2, facebook } = require('./services/test');
const { dbTest } = require('./db.js');

var app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
/*http.createServer(function(req,resp){
  console.log("hello");
  resp.end("Hello");
}).listen(3000);*/

app.get("/",function(res,resp){
  dbTest("João");
  resp.send("Hello my friends");
})

app.get("/test",test);
app.get("/test2",test2);
app.post("/facebook",facebook);

app.get("*",function(res,resp){
  resp.status(404);
  resp.send("This page does not exist.")
})
app.listen(3000);
