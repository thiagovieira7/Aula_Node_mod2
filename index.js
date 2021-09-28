const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("hello bluemer");
});

app.get("/eu", function(req, res){
    res.send("sou eu...")
});

app.get("/ausente", function(req, res){
    res.send("não estou...")
});


app.listen(3000)