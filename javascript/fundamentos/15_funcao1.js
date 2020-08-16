// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //segundo valor será undefined, resultaod sera NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //Vai pegar os dois primeiros e o resto vai ignorar
imprimirSoma() //NaN

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) //5
console.log(soma(2)) //2 
console.log(soma())//NaN - primeiro não tratado