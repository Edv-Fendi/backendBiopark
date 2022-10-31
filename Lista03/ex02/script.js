let paragrafo = document.getElementById("paragrafo");
let nome;

function mudarTexto(){
    nome = prompt("Informe seu nome");
    paragrafo.innerText="Tenha uma bom dia, sr(a) " + nome + ".";
}