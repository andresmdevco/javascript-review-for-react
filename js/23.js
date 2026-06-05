// Evaluación de corto circuito

const auth = true

if(auth) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}


auth && console.log('Usuario Autenticado')