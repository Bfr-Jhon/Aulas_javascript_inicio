const read = require("readline-sync");

let cargo;
let reajuste;

console.log("========================");
console.log("        Cargos          ");
console.log("========================");
console.log("(1) - Gerente           ");
console.log("(2) - Vendedor          ");
console.log("(3) - Supervisor        ");
console.log("(4) - Motorista         -");
console.log("(5) - Estoquista        ");
console.log("(6) - Tecnico de TI     ");
console.log("=========================");
console.log("                         ");

let nome = read.question("Nome do colaborador: ");
let codigoCargo = read.questionInt("Codigo do Cargo: ");
let salario = read.questionFloat("Salario: R$ ");

switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        reajuste = 0.10;
        break;

    case 2:
        cargo = "Vendedor";
        reajuste = 0.07;
        break;

    case 3:
        cargo = "Supervisor";
        reajuste = 0.09;
        break;

    case 4:
        cargo = "Motorista";
        reajuste = 0.06;
        break;

    case 5:
        cargo = "Estoquista";
        reajuste = 0.05;
        break;

    case 6:
        cargo = "Tecnico de TI";
        reajuste = 0.08;
        break;

    default:
        console.log("Codigo invalido!");
        break;
}

let novoSalario = salario + (salario * reajuste);

console.log("Nome do colaborador: " + nome);
console.log("Cargo: " + cargo);
console.log("Salario reajustado: R$ " + novoSalario);
