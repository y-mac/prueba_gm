import '../styles/main.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

const showMenu = () => {
  const btn = document.querySelector('.mobile-menu-btn')
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.mobile-menu').classList.toggle('visible')
  })
}

showMenu()
