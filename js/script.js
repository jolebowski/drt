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

const filterButtons = document.querySelectorAll('.filter-button')
const filterAllButton = document.querySelector('.filter-all-button')

const showAllImages = () => {
  const filterImages = document.querySelectorAll('.filter-img')
  for (let j = 0; j < filterImages.length; j++) {
    filterImages[j].style.display = 'inline-block'
  }
}
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener('click', function () {
    const selectedCategory = this.getAttribute('data-category')
    const filterImages = document.querySelectorAll('.filter-img')
    for (let j = 0; j < filterImages.length; j++) {
      if (filterImages[j].getAttribute('data-category') === selectedCategory) {
        filterImages[j].style.display = 'inline-block'
      } else {
        console.log(filterImages[j].style.display)
        filterImages[j].style.display = 'none'
      }
    }
  })
}

filterAllButton.addEventListener('click', showAllImages)