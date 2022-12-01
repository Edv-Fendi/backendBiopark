const express = require('express');

const app = express();

app.get('/', (req, res) => {

    const data = new Date();
    console.log(data);
    res.send(`<h1> ${data} </h1>`);
})

app.listen(3500, function () {
    console.log('Rodei');
})