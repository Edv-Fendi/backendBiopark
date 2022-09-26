const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("pao");

    const a1Value = parseFloat(a1.value);


    const queijo = a1Value * 0.15;
    const presunto = a1Value * 0.10;




    document.getElementById("queijo").innerHTML =
        "O total de kgs de queijo é: " + (queijo).toFixed(2);

    document.getElementById("presunto").innerHTML =
        "O total de kgs de presunto é: " + (presunto).toFixed(2);


})