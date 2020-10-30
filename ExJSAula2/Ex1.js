// exercicio 1
//Constantes
const MEDIA = 70;
const AULASMINISTRADAS = 80;
const LIMITEFALTA = AULASMINISTRADAS * 0.25;

//Entrada de dados
let qteNotas = prompt("Quantas notas irá registrar?")
let notasAluno = [];

for(i=0; i<qteNotas; i++) {
    notasAluno[i] = prompt("Digite a nota " + (i+1))
}

let numeroFaltas = prompt("Numero de faltas");

//Calculo da média do aluno
let mediaAluno = (notasAluno.reduce((a, b) => a + b, 0) / notasAluno.length).toFixed();
console.log("Média do aluno = " + mediaAluno)


//processamento e retorno
if(mediaAluno >= MEDIA && numeroFaltas < LIMITEFALTA) {
    console.log("O aluno está Aprovado")
}else if (numeroFaltas > LIMITEFALTA) {
    console.log("O aluno está Reprovado por Falta")
}else {
    console.log("O aluno está Reprovado por Média")
}