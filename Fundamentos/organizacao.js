
// Imprimir
console.log("Hello WORLD")

// Bloco
{

}

// Tipos de variáveis
var a = 3
let b = 4

var a = 30 // var permite coisas desse tipo
b = 40

console.log(a, b)
// resultado: 30 40

a = 300
b = 400

console.log(a, b)
// resultado: 300 400

const c = 5
// c = 50 daria um erro
console.log(c)
// resultado: 5

//tipagem fraca

let qualquer = "legal" 
console.log(typeof qualquer)
// resultado: string

qualquer = 3.1516
console.log(typeof qualquer)
// resultado: number

// Tipo Number
const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
// resultado: 1 2

// Existem métodos dentro de Number que podem ser úteis, como:
console.log(Number.isInteger(peso1))
// resultado: true

// Operaçoes com number
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))

