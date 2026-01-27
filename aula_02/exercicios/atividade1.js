const read = require("readline-sync");


let salarioInicial = read.questionFloat("Digite o Valor do Salario: "); // irá ler o valor do salario
let abono = read.questionFloat("Digite o Valor do seu Abono: "); // irá ler o valor do abono


let salarioFinal = salarioInicial + abono; // variavel que recebe o valor final do salario, somando o salarioInicial + abono

    console.log("Salario inicial no valor de: ",salarioInicial); //Mostra o valor inicial do salario
    console.log("Valor do seu abono: ",abono); //Mostra o valor do Abono Salario
    console.log(`Salario Inicial (${salarioInicial}) + abono (${abono}) = salario final (${salarioFinal})`);//mostra como a conta foi realizada

    console.log("Salario Final:",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(salarioFinal)
);//Resultado final da conta ja formatado para o REAL
