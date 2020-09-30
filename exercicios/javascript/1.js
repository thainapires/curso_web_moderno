/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

//Usando função normal
function operacoes(val1,val2){
    console.log(val1+val2)
    console.log(val1-val2)
    console.log(val1*val2)
    console.log(val1/val2)
}

operacoes(1,2)

//Usando função arrow

operacoes2 = (val1, val2) => {
    console.log(val1+val2)
    console.log(val1-val2)
    console.log(val1*val2)
    console.log(val1/val2)
}

operacoes2(1,2)
