const read = require("readline-sync");


let produto;
let preco;


console.log("========================================")
console.log("      Produtos "      )
console.log("========================================")
console.log("(1) - Cachorro quente       -- R$10.00 ")
console.log("(2) - X salada              -- R$15.00 ")
console.log("(3) - X bacon              -- R$18.00  ")
console.log("(4) - Bauru                 -- R$12.00 ")
console.log("(5) - Refrigerante         -- R$08.00  ")
console.log("(6) - Suco de Laranja      -- R$13.00  ")
console.log("========================================")
console.log("                                        ")

let codigo = read.questionInt("Codigo do Produto: ");
let quantidade = read.questionInt("Quantidade: ");
// Daria para usar o read.K


switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;

    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;

    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;

    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;

    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;

    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;

    default:
        console.log("Codigo invalido!");
        break;
}

let valorTotal = quantidade * preco;

console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${valorTotal}`);
