const read = require("readline-sync");

let menor21 = 0;
let maior50 = 0;
let idade;


do{
    idade = read.questionInt(`Digite a idade:  `,
        {limitMessage: "Erro: digite apenas numeros inteiros!"});

   if (idade < 21 && idade > 0){ //apenas coloquei idade > 0 para que o numero negativo não contasse
        menor21++;
    }
    if(idade > 50){
        maior50++;
    }
}
while (idade >= 0);

 

console.log(`\nTotal de pessoas menores de 21 anos: ${menor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior50}`);
