var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/" , function(req,res){
	res.render("home");
});

app.get("/blog" , function(req,res){
	res.render("blog");
});

app.listen(3000, function(req,res){
	console.log("Server has started");
});