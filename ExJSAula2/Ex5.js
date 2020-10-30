//exercicio 5

let qteAlunos = 10;
let qteAprovados = 0
let qteReprovados = 0

for (i = 0; i < qteAlunos; i++) {
    console.log("\n Candidato " + (i+1))
    let aprovacao = prompt("Qual o resultado do exame? 1 ou 2?")
    if (aprovacao == 1) {
        console.log("Candidato Aprovado!")
        qteAprovados ++
    } else {
        console.log("Candidato Reprovado!")
        qteReprovados ++
    }
}

console.log("Numero de candidatos aprovados: " + qteAprovados)
console.log("Numero de candidatos reprovados: " + qteReprovados)
console.log("\n")
if (qteAprovados > 8) {
    console.log("Bonus to Instructor!")
}