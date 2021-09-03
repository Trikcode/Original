window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      const navHeader = document.querySelector('header')
      navHeader.classList.add('nav-color')

      const logo = document.querySelector('.logo')
      logo.classList.add('logo-color')
      const bars = document.querySelector('.nav-toggle')
      bars.classList.add('toggle-color')
      const one = document.querySelector('.one')
      one.classList.add('one-color')
      const two = document.querySelector('.two')
      two.classList.add('one-color')
      const three = document.querySelector('.three')
      three.classList.add('one-color')
      const four = document.querySelector('.four')
      four.classList.add('one-color')
    } else {
      const navHeader = document.querySelector('header')
      navHeader.classList.remove('nav-color')
      const logo = document.querySelector('.logo')
      logo.classList.remove('logo-color')
      const bars = document.querySelector('.nav-toggle')
      bars.classList.remove('toggle-color')
      const one = document.querySelector('.one')
      one.classList.remove('one-color')
      const two = document.querySelector('.two')
      two.classList.remove('one-color')
      const three = document.querySelector('.three')
      three.classList.remove('one-color')
      const four = document.querySelector('.four')
      four.classList.remove('one-color')
    }
  })
  // NavToggle
  const navToggle = document.querySelector('.nav-toggle')
  const links = document.querySelector('.links')

  navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links')
  })
  const navHeader = document.querySelector('header')
  navToggle.addEventListener('click', function () {
    navHeader.classList.toggle('nav-color')
    const bars = document.querySelector('.nav-toggle')
    bars.classList.toggle('toggle-color')
    const logo = document.querySelector('.logo')
    logo.classList.toggle('logo-color')
  })

  // Extra
  const Unique1 = document.querySelector('.unique1')
  Unique1.addEventListener('click', () => {
    const mode1 = document.querySelector('.mode1')
    mode1.classList.toggle('loading')
  })
  const Unique2 = document.querySelector('.unique2')
  Unique2.addEventListener('click', () => {
    const mode2 = document.querySelector('.mode2')
    mode2.classList.toggle('loading')
  })
  const Unique3 = document.querySelector('.unique3')
  Unique3.addEventListener('click', () => {
    const mode3 = document.querySelector('.mode3')
    mode3.classList.toggle('loading')
  })
  const Unique4 = document.querySelector('.unique4')
  Unique4.addEventListener('click', () => {
    const mode4 = document.querySelector('.mode4')
    mode4.classList.toggle('loading')
  })
  const Unique5 = document.querySelector('.unique5')
  Unique5.addEventListener('click', () => {
    const mode5 = document.querySelector('.mode5')
    mode5.classList.toggle('loading')
  })
  const Unique6 = document.querySelector('.unique6')
  Unique6.addEventListener('click', () => {
    const mode6 = document.querySelector('.mode6')
    mode6.classList.toggle('loading')
  })
  ///
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  info.textContent = item.text
  //Form

  let btn = document.querySelector('.submit')

  btn.addEventListener('click', (e) => {
    e.preventDefault()
    validate()
  })
})

let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let subject = document.getElementById('subject')
let form = document.querySelector('.form')
function validate() {
  //checkName
  if (userName.value.trim() === '') {
    let messageElement = document.querySelector('.true')
    messageElement.style.visibility = 'visible'
    messageElement.innerText = 'Name cannot be empty'
    userName.classList.add('error')
    userName.classList.remove('success')
    userName.value = ''
  } else {
    let messageElement = document.querySelector('.true')
    messageElement.style.visibility = 'hidden'
    userName.classList.remove('error')
    userName.classList.add('success')
  }
  if (userEmail.value.trim() === '') {
    let messageElemen = document.querySelector('.true')
    messageElemen.style.visibility = 'visible'
    messageElemen.innerText = 'Email cannot be empty'
    userEmail.classList.add('error')
    userEmail.classList.remove('success')
    userEmail.value = ''
  } else {
    if (!isValidEmail(userEmail.value.trim())) {
      let messageElemen = document.querySelector('.false')
      messageElemen.style.visibility = 'visible'
      messageElemen.innerText = 'Please provide a valid Email'
      userEmail.classList.add('error')
      userEmail.classList.remove('success')
      userEmail.value = ''
    } else {
      let messageElemen = document.querySelector('.false')
      messageElemen.style.visibility = 'hidden'
      userEmail.classList.remove('error')
      userEmail.classList.add('success')
      userEmail.value = ''
    }
    let area = document.querySelector('.area')
    let subject = document.getElementById('subject')
    subject.value = ''
    area.value = ''
  }
}

function isValidEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  )
}

const reviews = [
  {
    id: 1,
    name: 'Jesus Christ',
    img: 'https://preventsatan.com/wp-content/uploads/2019/06/Jesus-name-powerful.jpg',
    text: '“I have told you these things, so that in me you may have peace. In this world, you will have trouble. But take heart! I have overcome the world.”',
  },
  {
    id: 2,
    name: 'Jeff Bezos',
    img: 'https://bankersjournalug.com/wp-content/uploads/2021/02/Jeff-Bezos-to-step-down-as-Amazon-CEO.jpg',
    text: '“If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.”',
  },
  {
    id: 3,
    name: 'Henry Ford',
    img: 'https://i.pinimg.com/736x/84/26/70/842670e37ebe74851896be62688ccad0.jpg',
    text: '“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.”',
  },
]
// set starting item
let currentItem = 0
// select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const info = document.getElementById('inform')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

function showPerson(person) {
  const item = reviews[person]
  img.src = item.img
  author.textContent = item.name
  info.textContent = item.text
}

nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson(currentItem)
})
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson(currentItem)
})
