/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function plano_de_saude(idade){
    if(idade < 10 && idade > 0){
        return 'Você irá pagar 180 reais'
    }else if (idade > 10 && idade <= 30){
        return 'Você irá pagar 150 reais'
    }else if (idade > 30 && idade <= 60){
        return 'Você irá pagar 195 reais'
    }else if (idade > 60){
        return 'Você irá pagar 230 reais'
    }else{
        return 'Você inseriu um valor inválido'
    }
}

console.log(plano_de_saude(8))
console.log(plano_de_saude(30))
console.log(plano_de_saude(55))
console.log(plano_de_saude(90))
console.log(plano_de_saude(-1))
console.log(plano_de_saude('teste'))