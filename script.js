let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
let header = document.querySelector('header')

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navbar.classList.toggle('active')
}
window.onscroll = () => {
   menu.classList.remove('bx-x');
   navbar.classList.remove('active')
}
window.addEventListener('scroll', () => {
   header.classList.toggle('shadow', window.scrollY > 0);
})

