

let nome = "jhonatha";
let profissao = "pessoa desenvolvedora";
let salarioBruto = 3500.90;
const bonus = 0.05;
console.log("Tipo da variavel nome é: ",typeof(nome));

if (salarioBruto > 1000){
    let mensagem = "Salario maior que 1000";
    console.log(mensagem); //maior que 1000
}


console.log("Salario Liquido: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(salarioBruto + (bonus * salarioBruto))
);
