const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("hPredio");
    const a2 = document.getElementById("hPessoa");
    const a3 = document.getElementById("hPessoaSombra");


    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);
    const a3Value = parseFloat(a3.value);


    const sr = (a2Value / a3Value);
    const ap = sr * a1Value;

    document.getElementById("resultado").innerHTML =
        "Altura do prédio: " + (ap).toFixed(2) + " metros";




})