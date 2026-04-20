let button = document.getElementById("menuBtn")
let menu= document.getElementById("mobileMenu")

button.addEventListener("click", function(){
    menu.classList.toggle(".active");
})