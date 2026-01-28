const read = require("readline-sync");

let media = read.questionFloat("Digite a media do aluno: ");

if (media >= 7){
    console.log("aluno aprovado!");
}
else if(media >=6 && media < 7){
    console.log("Aluno de prova final");

}
else{
    console.log("Aluno Reprovado!");
}