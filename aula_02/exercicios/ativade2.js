const read = require("readline-sync");

let nota1 = read.questionFloat("Resultado da primeira Nota: ");
let nota2 = read.questionFloat("Resultado da Segunda Nota: ");
let nota3 = read.questionFloat("Resultado da Terceira Nota: ");
let nota4 = read.questionFloat("Resultado da Quarta Nota: ");


let mediaFinal = (nota1 + nota2 + nota3 + nota4)/4;

    console.log(`Sua media final é ${mediaFinal}`);

if (mediaFinal >= 7){
    console.log("Parabens, Voce foi aprovado!");
}
else if (mediaFinal >= 6 && mediaFinal < 7 ){
    console.log("Voce esta de Recuperacao!")
}
else{
    console.log("Voce esta Reprovado!")
}