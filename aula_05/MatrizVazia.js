const read = require("readline-sync");


//let matriz = new Array(2);
//
//for(let indice = 0; indice < matriz.length; indice ++){
//matriz[indice] = Array(3);

//}
 
// entrada de dados na matriz via teclado logo abaixo

//for (let linha = 0; linha < matriz.length; linha ++){
//    for (let coluna = 0; coluna < matriz[linha].length; coluna ++){
//        matriz[linha][coluna] = read.questionInt(`matriz[${linha}][coluna ${coluna}] = `);
//    }
//}

//console.table(matriz);



// FORMA REDUZIDA de se fazer 
let matriz = Array.from( { length: 2}, () =>
    Array.from({length : 3},
        () => read.questionInt("Digite um numero: "))

);


//exibir dados
console.table(matriz);