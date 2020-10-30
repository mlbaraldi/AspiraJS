//while
let count = 0
let numAtual = 1
let numAnterior = 0
let numProx = 1


while (count <= 30) {
    console.log(numProx);
    numProx = numAtual + numAnterior;
    numAnterior = numAtual;
    numAtual = numProx
    count++
}


// do while
let count = 0
let numAtual = 1
let numAnterior = 0
let numProx = 1


do {
    console.log(numProx);
    numProx = numAtual + numAnterior;
    numAnterior = numAtual;
    numAtual = numProx
    count++
}
while (count <= 30)