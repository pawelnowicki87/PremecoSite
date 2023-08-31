const menuBtn = document.querySelector('.menu-btn')
const navItems = document.querySelector('.nav-items')
let menuOpen = false

menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open')
        navItems.classList.add('open')
        menuOpen = true
    }else{
        menuBtn.classList.remove('open')
        navItems.classList.remove('open')
        menuOpen = false
    }
})
