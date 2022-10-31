let texto=document.getElementById("texto");
texto.addEventListener("keydown", mudarTexto);


function mudarTexto(element){
    if(element.key === "Enter"){
        alert(texto.value);
    }
    
}