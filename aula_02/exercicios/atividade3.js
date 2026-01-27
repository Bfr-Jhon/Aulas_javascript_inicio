const read = require("readline-sync");

let salarioBruto = read.questionFloat("Informe seu salario Bruto: "); // entrada dados salario bruto
let adicionalNoturno = read.questionFloat("Informe o valor do seu adicional Noturno: "); //entrada dados Adicional noturno
let horasExtras = read.questionFloat("Quantas Horas extras foram realizadas: "); // entrada dados horas extras
let descontos = read.questionFloat("Total dos descontos: "); // entrada dados descontos

let salarioFinal = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos


console.log(`salario final calculado da seguinte forma
    ${salarioBruto} + ${adicionalNoturno} + (${horasExtras} * 5) - ${descontos} = ${salarioFinal}`);

console.log("Salario Final: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(salarioFinal)
);