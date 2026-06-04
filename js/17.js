const tecnologias = ['HTML', 'Python', 'React.js', 'Vue', 'Kotlin', 'C#']
const numeros = [44, 73, 15]

// Filter
// const nuevoArray = tecnologias.filter((tech) => console.log(tech))
// const nuevoArray = tecnologias.filter(tech => tech !== 'Python')
const nuevoArray = tecnologias.filter((tech) => tech !== 'Python')
console.log(nuevoArray)

const resultado = numeros.filter(numero => numero !== 73)
console.log(resultado)

// Includes
const resultado2 = tecnologias.includes('Vue')
console.log(resultado2)