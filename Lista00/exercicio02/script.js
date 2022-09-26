const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("temp");

    const a1Value = parseFloat(a1.value);


    const farh = a1Value * 1.8 + 32




    document.getElementById("temperatura").innerHTML =
        "A temperatura em Fahrenheit é: " + (farh).toFixed(2);




})