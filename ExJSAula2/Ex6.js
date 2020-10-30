//exercicio 6
function rolaDado() {
    return Math.floor(Math.random() * 6) +1
}

let jogadaDados = 10
let rolagens = []
let jogadasImpares = 0;
let jogadasPares = 0;

for (i = 0; i < jogadaDados; i++) {
    rolagens.push(rolaDado())
}

for (i = 0; i < rolagens.length; (i=i+2)) {
    let soma = rolagens[i] + rolagens[i+1]
    if (soma % 2 === 0) {
        console.log("A soma do dado " + rolagens[i] + " com o dado " + rolagens[i+1] + " é de " + soma + "(par)" )
        jogadasPares++
    } else {
        console.log("A soma do dado " + rolagens[i] + " com o dado " + rolagens[i+1] + " é de " + soma + "(ímpar)" )
        jogadasImpares++
    }
}

console.log("lista de Dados jogados = " + rolagens)
console.log("Jogadas Pares = " + jogadasPares)
console.log("Jogadas Impares = " + jogadasImpares)