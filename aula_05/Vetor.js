const read = require("readline-sync");

let numeros = [10, 25, 5, 45, 85, 95];

let cores = Array(5);

for(let indice = 0; indice < numeros.length; indice ++){
    console.log(`Numeros[${indice}] = ${numeros[indice]}`);

}

console.log(`o tamanho do vetor numeros é: ${numeros.length}`);

console.table(numeros);

for (let indice = 0; indice < cores.length; indice ++){
    cores [indice] = read.question("Digite o nome de uma cor: ");

}

console.table(cores);

console.table(numeros.sort((a, b) => a - b));
//console.table(numeros.sort((a, b) => b - a));  ficaria ao contrario da anterior