const read = require("readline-sync");

let numero= read.questionInt("Digite O Numero Desejado: ");
let Par_Ou_Impar;
let Positividade;


if (numero % 2 === 0){
    Par_Ou_Impar = "par";
} 
else{
    Par_Ou_Impar = "impar";
}

if (numero > 0){
    Positividade = "é Positivo";
}
else{
    Positividade = "é negativo";
}

console.log(`O Numero ${numero} é ${Par_Ou_Impar} e ${Positividade} `);