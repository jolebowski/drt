const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const currentYear = new Date().getFullYear()
const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

document.getElementById('year').innerHTML = `Copyright  © ${currentYear} All Rights Reserved`

const showModal = (src) => {
  modal.classList.remove('hidden')
  modalImg.src = src
}

const closeModal = () => {
  modal.classList.add('hidden')
}
