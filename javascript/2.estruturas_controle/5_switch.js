const imprimirResultado = function (nota){
    //Executa 1 case e também os outros, se não colocar o break
    switch (Math.floor(nota)){
        case 10: //Se for 10 ou nove, executará o quadro de honra
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
    console.log("Fim!")
}

imprimirResultado(10)
imprimirResultado('aa')