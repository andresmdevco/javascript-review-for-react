const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
// tecnologias.push('Nest.js')

const nuevoArreglo = [...tecnologias, 'Nest.js']

console.table(tecnologias)
console.table(nuevoArreglo)

// tecnologias.shift()
// console.table(tecnologias)

// const tecnologias2 = tecnologias.filter(function(tech) {
//     if(tech!== 'CSS') {
//         return tech
//     }
// })

// console.log(tecnologias2)

const tecnologias2 = tecnologias.map(function(tech) {
    if (tech === 'Node.js') {
        return 'Nest.js'
    } else {
        return tech
    }
})

console.log(tecnologias2)
