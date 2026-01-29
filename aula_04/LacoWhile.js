const read = require("readline-sync");


let numero = read.questionInt("Digite um numero interiro: ");
let contador = 1;

while( contador <= 10){
    console.log(`${numero} x ${contador} = ${numero * contador} `);
    contador ++;
}
