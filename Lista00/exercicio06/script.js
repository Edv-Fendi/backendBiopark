const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("lata");
    const a2 = document.getElementById("garrafa");
    const a3 = document.getElementById("pet");



    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);
    const a3Value = parseFloat(a3.value);



    const result = (a1Value * 0.350) + (a2Value * 0.600) + (a3Value * 2);

    document.getElementById("resultado").innerHTML =
        "Comprou: " + (result).toFixed(2) + " litros de refrigerante";




})