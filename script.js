let switcher = document.getElementById('switcher')
let switcherItems = document.querySelectorAll('[data-switcher]')
let type = 'month'

let starter = document.getElementById('card-start')
let professional = document.getElementById('card-professional')
let company = document.getElementById('card-company')

switcher.addEventListener('click', (e) => {

    switcherItems.forEach((item) => {
        item.classList.remove('button')
        if (item === e.target) {
            item.classList.add('button')
            type = item.dataset.switcher
        }
    })

    if (type === "month") {
        starter.innerHTML = `$19 <span>/month</span>`
        professional.innerHTML = `$54 <span>/month</span>`
        company.innerHTML = `$89 <span>/month</span>`
    } else {
        starter.innerHTML = `$12 <span>/year</span>`
        professional.innerHTML = `$36 <span>/year</span>`
        company.innerHTML = `$56 <span>/year</span>`
    }
})