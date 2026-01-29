const read = require("readline-sync");

let continua = 'S';

while( continua === 'S'){
console.log("========================================")
console.log("       CALCULADORA COM SWITCH CASE"      )
console.log("========================================")
console.log("(+) - Soma                              ")
console.log("(-) - Subtração                         ")
console.log("(*) - Multiplicação                     ")
console.log("(/) - Divisão                           ")
console.log("========================================")
console.log("                                        ")



let numero1 = read.questionFloat("Digite o primeiro numero: ", {limitMessage:'digite um numero float'});
let numero2 = read.questionFloat("Digite o Segundo numero: ");

let operacao = read.keyIn("Digite a operacao desejada: ");

switch(operacao){
    case "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    break;

    case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);    
    break;

    case "*":
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    break;

    case "/":
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    break;

    default:
        console.log("Comando Inválido!");
}

 continua = read.keyIn("Deseja Continuar? (S/N)? ").toUpperCase()

}