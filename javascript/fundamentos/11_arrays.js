const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) 
console.log(valores[4]) //nao da erro, é undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //pode misturar coisas
console.log(valores)

console.log(valores.pop()) //tira o ultimo
delete valores[0] //tira o primeiro elemento do array

console.log(valores)

console.log(typeof valores) //tipo object