const http = require('http');

const server = http.createServer((req, res) =>{

    const url = req.url;

    console.log('Alguém se conectou');
    res.write("<h1>Oi pessoinha</h1>");
    res.end(`<h2>Voce se conectou na url:${url}</h2>`); 
})

server.listen(3000, () =>{
    console.log("O servidor está rodando na porta http://localhost:3000");
})

