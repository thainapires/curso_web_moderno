/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

Plano || Aumento

A -- 10%
B -- 15%
C -- 20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

*/

function novoSalario(plano, salarioAtual){
    switch(plano){
        case 'A':
            return salarioAtual + (salarioAtual*0.10)
        case 'B':
            return salarioAtual + (salarioAtual*0.15)
        case 'C':
            return salarioAtual + (salarioAtual*0.20)
        default:
            return 'Plano é inválido'
    }
}

console.log(novoSalario('A', 1000))
console.log(novoSalario('B', 1000))
console.log(novoSalario('C', 1000))