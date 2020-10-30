
//exercicio 2
let valorDeCompra = prompt("Quanto custou o produto?")
let valorDeVenda;

if (valorDeCompra < 50) {
    valorDeVenda = valorDeCompra * 1.45
} else {
    valorDeVenda = valorDeCompra * 1.3
}
console.log("O valor de venda é de R$ " + valorDeVenda.toFixed(2))