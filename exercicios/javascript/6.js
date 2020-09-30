/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos
*/

function montante(capitalInicial, taxaJuros, tempoAplicacao){
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
}

function valor(capitalInicial, taxaJuros, tempoAplicacao){
    return capitalInicial * (1 + taxaJuros) ** tempoAplicacao
}

console.log(montante(100, 10/100, 2))

console.log(valor(100, 10/100, 2))