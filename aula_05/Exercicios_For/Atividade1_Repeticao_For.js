const read = require("readline-sync");

let numero1 = read.questionInt("Digite um numero: ");
let numero2 = read.questionInt("Digite um numero: ");

if(numero1 > numero2){
    console.log("intervalo Invalido! ");
}
else{
    for(let contador = numero1; contador <= numero2; contador++){
        if(contador % 3 === 0 && contador % 5 === 0){
            //poderia colocar tmb esse if como
    //  if(let contador % 15 === 0), pois 3 e 5 são multiplos de 15
            console.log(`${contador} é multiplo de 3 e 5`)
        }       

    }
}