const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const dados = req.query
    if(Object.keys(dados).length === 0) {
        res.send("ta errado")
    }
    else {
        res.send(dados);
    }
  
})

app.listen(3500, function () {
    console.log('Rodei');
})