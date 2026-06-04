const tecnologias = ['HTML', 'Python', 'React.js', 'Vue', 'Kotlin', 'C#']
const numeros = [15, 44, 73]

// Filter
// const nuevoArray = tecnologias.filter((tech) => console.log(tech))
// const nuevoArray = tecnologias.filter(tech => tech !== 'Python')
const nuevoArray = tecnologias.filter((tech) => tech !== 'Python')
console.log(nuevoArray)

const resultado = numeros.filter(numero => numero > 15)
console.log(resultado)

// Includes
const resultado2 = tecnologias.includes('Vue')
console.log(resultado2)

// Some - Devuelve si al menos uno cumple la condición
const resultado3 = numeros.some(numero => numero > 15)
// if (resultado3) {
//     console.log('Si hay elementos')
// } else {
//     console.log('No hay elementos')
// }
console.log(resultado3)

// Find - Devuelve el primer elemento que cumple una función
const resultado4 = numeros.find(numero => numero > 15)
console.log(resultado4)

// Every - Retorna true o false si todos cumplen la condición
const resultado5 = numeros.every(numero => numero > 15)
console.log(resultado5)

// Reduce - Retorna un acumulado del total
// const resultado6 = numeros.reduce((total, numero) => {
//     console.log(total)
//     console.log(numero)

//     return total + numero
// }, 0)

const resultado6 = numeros.reduce((total, numero) => total + numero, 0)

console.log(resultado6)
