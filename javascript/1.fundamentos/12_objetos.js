const prod1 = {} //objeto vazio - um objeto é uma coleção de chave e valores
prod1.nome = 'Celular ultra Mega' //Criado dinamicamente
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
}

console.log(prod2)

