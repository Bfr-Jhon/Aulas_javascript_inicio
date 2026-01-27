let numero1 = "1"; //é tipo string
let numero2 = 1;
let numero3 = 10;

console.log(`Comparação igual: ${numero1 == numero2}`); //true - pois 1 é igual a 1
console.log(`Comparação igual: ${numero1 === numero2}`); // false - pois sao igual, mas tipos Diferentes

if( numero2 < numero3){
    console.log("O valor da variavel numero2 é maior que o da variavel numero3")
}