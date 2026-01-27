const read = require("readline-sync");

let n1 = read.questionFloat("Informe o primeiro valor: ");
let n2 = read.questionFloat("Informe o segunto valor: ");
let n3 = read.questionFloat("Informe o Terceiro valor: ");
let n4 = read.questionFloat("Informe o quarto valor: ");

let resultado = (n1*n2) - (n3*n4);

console.log("A diferenca é de: ",resultado);