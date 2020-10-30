//exercicio 4
//loop para arrayA
let arrayA = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

for (i = 0; i < arrayA.length; i++) {
    for (j = 0; j < arrayA.length; j++) {
        //é neste if que decide se quero crescente ou decrescente  
         if (arrayA[j] > arrayA[j+1]) {
            let x = arrayA[j]
            arrayA[j] = arrayA[j+1]
            arrayA[j+1] = x
     }
    }
    }
console.log("array final " + arrayA)

//loop para arrayB
let arrayB = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


for (i = 0; i < arrayB.length; i++) {
    for (j = 0; j < arrayB.length; j++) {
        //é neste if que decide se quero crescente ou decrescente    
        if (arrayB[j] < arrayB[j+1]) {
            let x = arrayB[j]
            arrayB[j] = arrayB[j+1]
            arrayB[j+1] = x
     }
    }
    }
console.log("array final " + arrayB)