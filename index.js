const express = require("express");
const path = require ("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/pagina", function(req, res){
    res.render("pagina")
});

app.get("/ausente", function(req, res){
    res.render("não estou...")
});


app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`));