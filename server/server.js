var express = require('express');

var app = express();
// var mongoose=require('mongoose')
// // var bodyParser = require('body-parser');
//  var morgan = require('morgan');

app.get("/",
	function(res,req){
		res.send("HI")
	})


app.listen(3000,function(){

});