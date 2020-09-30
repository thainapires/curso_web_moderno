let valor // não inicializada
console.log(valor) //Undefined
console.log(valor2) //It's not defined (error)

valor = null // ausência de valor
console.log(valor) //Foi definida - não dará undefined, mas null
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) //undefined
console.log(produto) //{}

produto.preco = 3.50 
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) //false
// delete produto.preco //para tirar atributo de um objeto {}
console.log(produto) // {preco: undefined}

produto.preco = null // sem preço
console.log(!!produto.preco) //false
console.log(produto) //{preco: null}