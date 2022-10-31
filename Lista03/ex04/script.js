let texto=document.getElementById("texto");
let resposta=document.getElementById("resposta");
let text;
let aux;

function verifica(){
    if (texto.value.length==11){
        aux = confirm("O CPF informado é: " + texto.value);
        if (aux == true) {
            resposta.innerText ="CPF Válido";
        }else
        resposta.innerText ="operação cancelada";

    }else if(texto.value.length<11){
        alert("O valor informado tem menos de 11 digitos.");

    }else if(texto.value.length>11)
        alert("O valor informado tem mais de 11 digitos.");
}