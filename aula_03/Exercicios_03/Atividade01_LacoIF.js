const read = require("readline-sync");

let numero1= read.questionInt("Digite O Primeiro Valor (A): ");
let numero2= read.questionInt("Digite O Segundo Valor (B): ");
let numero3= read.questionInt("Digite O Terceiro Valor (C): ");
let soma = numero1 + numero2; 

if (soma > numero3){
    console.log("A Soma de A + B é MAIOR do que C");
} 
else if (soma < numero3){
    console.log("A Soma de A + B é MENOR do que C");
}
else{
    console.log("A Soma de A + B é IGUAL a C");
}