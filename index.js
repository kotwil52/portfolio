// select element in html
const section = document.querySelector('section')
const myVideo = document.getElementById('myVideo')
const message = document.getElementsByClassName('message')
// const delete = document.getElementsByClassName('delete')

/// / display message about
const display = () => {
  message[0].style.display = 'block'
}

const deleteMessage = () => {
  message[0].style.display = 'none'
}

// Background generator function declaration
const backgroundColor = () => {
  myVideo.style.display = 'none'
  section.classList.remove('gallery')
  section.style.backgroundColor = `rgb( ${randomN()}, ${randomN()}, ${randomN()})`
}
// generator random number

const randomImage = () => {
  myVideo.style.display = 'none'
  section.classList.add('gallery')
}

const playVideo = () => {
  myVideo.style.display = 'block'
}

const randomN = () => {
  return Math.floor(Math.random() * 255)
}
// random image
/* var galleri = document.getElementsByClassName('gallery')
galleri.style.backgroundImage = `url(${images[0]})`

var images = ['img_tree.png']
*/
