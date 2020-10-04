/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1 */

function retornarNotas(valor){
    restoZero = false
    contador = 0
    arrayVal = []
    notas = [100, 50, 10, 5, 1]

    while(restoZero != true){
        if(valor == 0){
            restoZero = true
        }else{
            qtd = Math.floor(valor/notas[contador])
            arrayVal.push(qtd)
            valor = valor-(qtd*notas[contador])
            contador = contador + 1
        }
    }

    //1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1 

    contador2 = 0
    stringFormatada = ''
    for (let i = 0; i < notas.length; i++){
        if(arrayVal[i] != 0){
            if(arrayVal[i] == notas.length){
                stringFormatada += arrayVal[i]+' nota(s) de R$ '+notas[i]
            }else{
                stringFormatada += arrayVal[i]+' nota(s) de R$ '+notas[i]+'. '
            }
        }
        contador2++
    }

    return stringFormatada
}

console.log(retornarNotas(153))
