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