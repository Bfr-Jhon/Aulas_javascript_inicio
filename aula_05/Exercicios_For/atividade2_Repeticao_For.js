const read = require("readline-sync");

let numPar = 0;
let numImpar = 0;

for(let contador =1; contador <= 10; contador++){
    let numero = read.questionInt(`Digite o ${contador} numero: `,
        {limitMessage: "Erro: digite apenas numeros inteiros!"});

    if (numero % 2 === 0){
        numPar++;
    }
    else{
        numImpar++;
    }

}

console.log(`O Total de numeros pares é ${numPar}`);
console.log(`O Total de numeros Impares é ${numImpar}`);