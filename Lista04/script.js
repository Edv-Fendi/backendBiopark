/* Questão 1 – Crie um documento html e um arquivo Javascript. 
//Dentro do arquivo script, insira o vetor de idosos. 
//Todos os exercícios que serão feitos hoje serão em cima deste vetor.

Questão 2 – Execute os seguintes comandos diretamente no console do navegador e observe os resultados. ( pode copiar e colar diretamente daqui) */

const idosos = [
    { id: 0, nome: "genoveva", idade: "65", vivo: true },
    { id: 1, nome: "creitons", idade: "58", vivo: true },
    { id: 2, nome: "genival", idade: "81", vivo: false },
    { id: 3, nome: "irineu", idade: "60", vivo: null },
    { id: 4, nome: "iracema", idade: "32", vivo: true },
    { id: 5, nome: "mirileu", idade: "85", vivo: false },
    { id: 6, nome: "virmondo", idade: "123", vivo: true },
    { id: 7, nome: "vinhado", idade: "12", vivo: false },
    { id: 8, nome: "Lindomar", idade: "60", vivo: true },
    { id: 9, nome: "celestino", idade: "68", vivo: true },
    { id: 10, nome: "felisberg", idade: "72", vivo: false },
    { id: 11, nome: "eunice", idade: "67", vivo: true },
    { id: 12, nome: "josefina", idade: "92", vivo: true },
    { id: 13, nome: "virosvaldo", idade: "12", vivo: false },
    { id: 14, nome: "masteromio", idade: "85", vivo: false  }
]


idosos.forEach(function(item){
 console.log("nome:"+ item.nome)
})

idosos.map(function (item){
    return item.nome
})

    idosos.filter(function(item){
        return item.idade >70 
})

/* Na sua percepção, o que cada função fez com os nossos dados?

A função retornou a palavra "nome" e o nome dos elementos

A função retornou os nomes dentro de um vetor.

A função retornou apenas os elementos do vetor com idade acima de 70 anos.

Questão 03 – Crie um botão em seu HTML.

Associe este elemento a uma variável em seu código Javascript
Adicione ao botão um evento de click e uma função que escreva no console todos os dados dos idosos. */

function exibirDados (){
    console.log(idosos)
}

/* Questão 04 – crie uma função que exiba no console apenas os idosos que estão vivos.
Crie uma função que exiba no console apenas os idosos que estão mortos
Crie uma função que exiba no console apenas os idosos que são jovens */
 
function exibirVivos (){
const vivos = idosos.filter(function(item){
    return item.vivo 
})
console.log(vivos)
}

function exibirMortos (){
const mortos = idosos.filter(function(item){
        return !item.vivo
    
    })
console.log(mortos)
}


function exibirIdososJovens (){
const jovens = idosos.filter(function(item){
            return item.idade < 50
        
    })
console.log(jovens)}
document.getElementById("dados").addEventListener("click", exibirDados);
document.getElementById("vivos").addEventListener("click", exibirVivos);
document.getElementById("mortos").addEventListener("click", exibirMortos);
document.getElementById("jovens").addEventListener("click", exibirIdososJovens);








