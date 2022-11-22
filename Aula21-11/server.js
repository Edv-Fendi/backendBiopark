const express = require('express');

const app = express();


app.use("/", function(req, res){
    if(req.query.nome === "edv"){
        res.send(" Edvaldo Fendi");

    }else {
        res.send(" Nem te conheco");
    }
})

app.use("/users", function(req, res){
    res.send("<h1> Edvaldo Fendi </h1>");
    // res.send("<h2> Hola Mundo </h2>");
    console.log('Alguem conectou');
})

app.use("/data", function(req, res){
    res.sendStatus(418);
    console.log('Alguem conectou');
})

app.listen(3000, function(){
    console.log('O servidor esta online');
})

