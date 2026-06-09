// Manipular elementos HTML con JS
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = 'Un nuevo heading...'
// heading.id = 'Un nuevo ID'

// heading.removeAttribute('id')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor...'
// console.log(inputNombre.classList)
// inputNombre.dataset.nombre = "input"

// enlaces[0].textContent = 'Nuevo Enlace'
enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')
