
/*Crie uma função que seja uma calculadora.*/

/* soma
  subtração
  multiplicação
  divisão
  retorna 0 */

const SOMA = 'somar';
const SUB = 'subtrair';
const MULT = 'multiplicar';
const DIV = 'dividir';


function calculadora(tipoCalculo, num, num2) {
  let total=0;
  switch(tipoCalculo) {
    case SOMA:
      total = soma(num, num2);
      break;
    case SUB:
      total = subtrair(num, num2);
    case MULT:
      total = multiplicar(num, num2)
      ;
    case DIV:
      total = dividir(num, num2)
      ;
    default:
      return total;
    break;
  }
  return total;
}

function soma(num1, num2) {
  return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 === 0) {
        return "não é possível dividir por 0"
    }
    return num1 / num2;
}