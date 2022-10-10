const lanchonete = {
    cachorroQuente: [],
    refrigerante: [],
    picole: [],
    valorCaixa: [],
    valorDespesas: [],
};

let mostrarValor = 0;
let x = 0;
let y = 0;
let menu = 0;

do {
    menu = parseInt(prompt("1 - Cachorro Quente. \nUm por R$8,00, dois por R$15,00\n2 - Refrigerantes \nR$ 7,00 Reais \nSe comprar acima de 3, sai R$6.00 reais cada. \n3 - Picolé \nR$1.50 a unidade!!! \n0 - Sair"));

    switch (menu) {
        case (0):
            alert("Obrigado por usar nossos serviços")
            break;

        case (1):
            x = parseFloat(prompt("Quantos cachorros quentes voce quer comprar, se desejar sair, digite 0?"));
            lanchonete.cachorroQuente.push(x);
            y = x * 4.50;
            lanchonete.valorDespesas.push(y);

            
            if (x % 2 == 0 && x != 0) {
                y = x * 4.50;
                alert(mostrarValor = x * 7.50);
                lanchonete.valorCaixa.push(mostrarValor);
                

                
            } else if (x != 0) {
                alert(mostrarValor = (((x - 1) * 7.50) + 8.00));
                lanchonete.valorCaixa.push(mostrarValor);
                

            }
                break
            case (2):
               x = parseFloat(prompt("Quantos refrigerantes voce quer comprar? Se desejar não comprar, digite 0 para voltar"));
               lanchonete.refrigerante.push(x);
            
               if(x <= 3){  
                alert(mostrarValor = x * 7.00);
                lanchonete.valorCaixa.push(mostrarValor);
                
               }else if (x > 3) {
                alert(mostrarValor = x * 6.00);
                lanchonete.valorCaixa.push(mostrarValor);
              
            }
            break

            case (3):
               x = parseFloat(prompt("Quantos picolés voce deseja comprar? Se desejar não comprar, digite 0 para voltar"));
               lanchonete.picole.push(x);

                mostrarValor = x * 1.50;
                y = x * 0.75;
                lanchonete.valorCaixa.push(mostrarValor);
                lanchonete.valorDespesas.push(y);

                break
            }
           
    } while (menu != 0);

console.log("O valor total de entrada no caixa é de: " + somatorio(lanchonete.valorCaixa).toString())
console.log("O valor total de despesas foram de: " + somatorio(lanchonete.valorDespesas).toString())

function somatorio(vet) {
    return vet.reduce((acc, curr) => acc + curr, 0)
}