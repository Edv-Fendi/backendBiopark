const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("hExtra");
    const a2 = document.getElementById("hNormal");


    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);



    const result = ((a1Value * 10.00) + (a2Value * 15.00) * 0.90);




    document.getElementById("resultado").innerHTML =
        "O salario final sera de: " + (result).toFixed(2);




})