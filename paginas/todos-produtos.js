//Menu Hamburguer
function abrirmenu(){
     menu = document.getElementById('menu')
    const overlay = document.getElementById('overlay')

    menu.classList.toggle("ativo")
    overlay.classList.toggle("ativo")

if(menu.classList.contains("ativo")){
    document.body.style.overflow = "hidden"
} else{
    document.body.style.overflow ="auto"
} 
} 