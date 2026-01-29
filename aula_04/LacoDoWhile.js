const read = require("readline-sync");


let numero = read.questionInt("Digite um numero interiro: ");
let contador = 1;

do{
    console.log(`${numero} x ${contador} = ${numero * contador} `);
    contador ++;
}
    while( contador <= 10)