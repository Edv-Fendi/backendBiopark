let pessoas = []

const botao = document.getElementById('exibe')
const mostra = function(){

    fetch("http://10.200.70.241:5555/old")
    .then(function(resposta){
   return resposta.json()

   })
   .then(function(dados){
       pessoas = dados;
   })

}


exibe.addEventListener('click', mostra);

const busca = function(){

    fetch("https://viacep.com.br/ws/85904300/json")
    .then(function(resposta){
    return resposta.json()

   })
   .then(function(dados){
      console.log(dados);
   })

}