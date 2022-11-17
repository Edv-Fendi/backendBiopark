const { response } = require('express');
const express = require('express');

const app = express();

app.use(function(request, response){
    console.log("Alguem conectou");
    response.send("Ta maluco");
})

app.listen(3000, function () {
    console.log('BATATA');
})