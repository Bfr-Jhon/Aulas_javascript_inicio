const read = require("readline-sync");

let notas = [];
let medias = [];


for (let i = 0; i < 3; i++) {

    notas[i] = [];
    let soma = 0;

    console.log(`Aluno ${i + 1}:`);

    
    for (let j = 0; j < 4; j++) {
        let nota = read.questionFloat(`Nota do ${j + 1} bimestre: `);
        notas[i][j] = nota;
        soma += nota;
    }

    medias[i] = soma / 4;
}

// saída
console.log("\nMédias dos alunos:");
for (let i = 0; i < 3; i++) {
    console.log(`Aluno ${i + 1}: ${medias[i]}`);
}
