const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    const html = fs.readFileSync('index.html').toString();
    res.send( html ); 
})
app.get('/data', (req, res) => {
    res.write(`<h1>your name is ${req.query.nome}, you are ${req.query.age} years old, and live in ${req.query.city}</h1>`);


    res.send("FIM");
});

app.listen(3500,  () => {
    console.log('Rodei');
})