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
        filterImages[j].style.display = 'none'
      }
    }
  })
}

filterAllButton.addEventListener('click', showAllImages)
const form = document.getElementById('myForm')

form.addEventListener('submit', function (event) {
  const fields = form.querySelectorAll('input, textarea')
  let error = false
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      error = true
      event.preventDefault()
      document.getElementById(`${fields[i].id}-error`).innerHTML = 'Ce champ est requis'
    }
  }

  if (!error) {
    const params = {
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      subject: document.querySelector('#subject').value,
      message: document.querySelector('#message').value,
    }
    const serviceId = 'service_bib7sli'
    const templateId = 'template_hf3gwrb'

    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('subject').value = ''
        document.getElementById('message').value = ''
        console.log(res)
        alert('Votre message a bien été envoyé !')
      })
      .catch((err) => {
        console.log(err)
      })
    document.getElementById('myForm').submit()
    error = false
  }
})
