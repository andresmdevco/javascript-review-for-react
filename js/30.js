// Eventos del DOM - Clicks
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('mouseenter', () => {
//     heading.textContent = 'Nuevo heading al dar click...'
// })

// heading.addEventListener('mouseleave', () => {
//     heading.textContent = 'Saliendo...'
// })

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (event) => {
        event.preventDefault()
        // console.log(event.target)
        event.target.textContent = 'Diste click...'
        console.log('diste click en un enlace...')
    })
});