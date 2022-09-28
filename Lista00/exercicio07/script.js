const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("cinco");
    const a2 = document.getElementById("dez");
    const a4 = document.getElementById("vCinco");
    const a5 = document.getElementById("cinquenta");
    const a6 = document.getElementById("um");

    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);
    const a4Value = parseFloat(a4.value);
    const a5Value = parseFloat(a5.value);
    const a6Value = parseFloat(a6.value);





    const result = (a1Value * 0.05) + (a2Value * 0.10) + (a4Value * 0.25) + (a5Value * 0.50) + (a6Value * 1);

    document.getElementById("resultado").innerHTML =
        "Total: " + (result).toFixed(2) + " reais em moedas";




})