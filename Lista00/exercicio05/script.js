const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("blusas");
    const a2 = document.getElementById("novelos");


    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);


    const result = a2Value / a1Value;




    document.getElementById("resultado").innerHTML =
        "Cada blusa gastou: " + (result).toFixed(2) + " novelos";




})