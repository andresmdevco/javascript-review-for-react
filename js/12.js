// Recorriendo arrays con for

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

// for(let i = 0; i < tecnologias.length; i++) {
//     console.log(tecnologias[i])
// }

// forEach
tecnologias.forEach(function(tech) {
    console.log(tech)
})

// map (genera un arreglo nuevo)
const arrayMap = tecnologias.map(function(tech) {
    return tech
})

console.log(arrayMap)

// for ... of
for (let tech of tecnologias) {
    console.log(tech)
}



