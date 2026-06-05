// Ternarios
const auth = true

const saldo = 1000
const pagar = 1200
const tarjeta = true

auth ? 
    console.log('Usuario autenticado') : 
    console.log('No Autenticado, ir a Login')

saldo > pagar ?
    console.log('Si puedes pagar') :
    tarjeta ?
        console.log('Puedes pagar con tarjeta') :
        console.log('No, no puedes pagar')

saldo > pagar || tarjeta?
    console.log('Si puedes pagar') :
    console.log('No, no puedes pagar')