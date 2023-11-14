let menuIcon = document.querySelector("#menubar");
let toggleNav = document.querySelector(".links")

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("fa-xmark");
    toggleNav.classList.toggle("active")
}