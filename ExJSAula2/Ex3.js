
//
//exercicio 3
let salarioAtual = prompt("Digite o salário atual")
let novoSalario;

if (salarioAtual <= 1045) {
    novoSalario = salarioAtual * 1.3
} else if (salarioAtual <= 1500) {
    novoSalario = salarioAtual * 1.25
} else if (salarioAtual <= 2600) {
    novoSalario = salarioAtual * 1.20
} else if (salarioAtual <= 3550) {
    novoSalario = salarioAtual * 1.15
} else {
    novoSalario = salarioAtual * 1.1
}

console.log("Novo salário é de R$ " + novoSalario.toFixed(2))