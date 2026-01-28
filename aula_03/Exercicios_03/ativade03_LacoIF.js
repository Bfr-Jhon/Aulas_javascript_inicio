const read = require("readline-sync");

let nome = read.question("Informe Seu nome completo: ");
let idade = read.questionInt("Informe sua idade: ");

if (idade < 18 || idade > 69) {
    console.log(`${nome} nao está apto a doar sangue!!`);
}
else if (idade >= 60 && idade <= 69) {
    let Doacao = read.question("Ja doou antes?  (Sim/Nao)? ");
    

    if (Doacao === "sim") {
        console.log(`${nome}  está apto a doar sangue!!`);
    } else {
        console.log(`${nome} Não está apto a doar!!`);
    }
}
else {
    console.log(`${nome} está apto a doar!!`);
}
