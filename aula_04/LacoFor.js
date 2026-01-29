const read = require("readline-sync");

let numero = read.questionInt("Digite um numero interiro: ");

for(let contador = 1; contador <= 10; contador ++){
    console.log(`${numero} x ${contador} = ${numero * contador} `);
}
