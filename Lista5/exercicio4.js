const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("Alguem conectou");
    res.send("<h1> Voce se conectou com sucesso </h1>");
})

app.listen(3500, function () {
    console.log('Rodei');
})