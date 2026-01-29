const read = require("readline-sync");

let vetor = [];

// ler o veto digitado
for (let i = 0; i < 10; i++) {
    vetor[i] = read.questionInt(`Digite o ${i + 1} numero do vetor: `);
}

// ler o numero que quer buscar
let busca = read.questionInt("Digite o numero que deseja encontrar: ");

let posicao = -1;

// pesquisar o vetor
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === busca) {
        posicao = i;
        break;
    }
}


if (posicao !== -1) {
    console.log(`O número ${busca} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${busca} não foi encontrado!`);
}
