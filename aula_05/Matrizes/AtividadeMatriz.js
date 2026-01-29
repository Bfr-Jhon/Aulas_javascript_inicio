const read = require("readline-sync");

let matriz = [];
let diagonalPrincipal = 0;
let diagonalSecundaria = 0;

// leitura da matriz 3x3
for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = [];

    for (let coluna = 0; coluna < 3; coluna++) {
        matriz[linha][coluna] = read.questionInt(`Digite o valor [${linha}][${coluna}]: `);
    }
}

console.log("Diagonal Principal:");
for (let linha = 0; linha < 3; linha++) {
    console.log(matriz[linha][linha]);
    diagonalPrincipal += matriz[linha][linha];
}

console.log(" Diagonal Secundária:");
for (let linha = 0; linha < 3; linha++) {
    console.log(matriz[linha][2 - linha]);
    diagonalSecundaria += matriz[linha][2 - linha];
}

console.log(`Soma da Diagonal Principal: ${diagonalPrincipal}`);
console.log(`Soma da Diagonal Secundária: ${diagonalSecundaria}`);
