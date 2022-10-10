const pedidos = []
const valorCaixa = []

let mostrarValor = 0;

let x = 0 ;
do{
    x = parseInt(prompt("Quantos cachorros quentes voce quer comprar, se desejar sair, digite 0?"));
    pedidos.push(x);

    if (x % 2 == 0 && x != 0){
       alert(mostrarValor =  x * 7.50);
       valorCaixa.push(mostrarValor);
    } else if (x != 0){
        alert(mostrarValor = (((x - 1) * 7.50) + 8.00));
        valorCaixa.push(mostrarValor);
    }
    console.log(valorCaixa);

} while (x != 0);
