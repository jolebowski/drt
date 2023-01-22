const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const currentYear = new Date().getFullYear()
const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')
const modalText = document.getElementById('text')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

document.getElementById('year').innerHTML = `Copyright  © ${currentYear} All Rights Reserved`

const showModal = (src, text) => {
  console.log(text)
  modal.classList.remove('hidden')
  modalImg.src = src
  modalText.innerHTML = text === undefined ? '' : text
}

const closeModal = () => {
  modal.classList.add('hidden')
}
