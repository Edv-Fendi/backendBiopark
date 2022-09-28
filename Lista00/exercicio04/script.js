const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("qFrangos");



    const a1Value = parseFloat(a1.value);




    const result = ((a1Value * 4.00) + (a1Value * 7.00));




    document.getElementById("resultado").innerHTML =
        "O valor gasto é de: " + (result).toFixed(2);




})