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



//Inicio Carrossel
// SELECIONA TODOS OS SLIDES
const slides = document.querySelectorAll('.slide');


// SELECIONA BOTÃO PRÓXIMO
const btnProximo = document.querySelector('.proximo');


// SELECIONA BOTÃO ANTERIOR
const btnAnterior = document.querySelector('.anterior');


// SELECIONA TODAS AS BOLINHAS
const bolinhas = document.querySelectorAll('.bolinha');


// GUARDA O ÍNDICE DA IMAGEM ATUAL
let index = 0;


// FUNÇÃO PARA MOSTRAR SLIDE
function mostrarSlide(){

    // REMOVE A CLASSE ATIVO DE TODOS OS SLIDES
    slides.forEach(slide => {
        slide.classList.remove('ativo');
    });


    // REMOVE A CLASSE ATIVO DE TODAS AS BOLINHAS
    bolinhas.forEach(bolinha => {
        bolinha.classList.remove('ativa');
    });


    // ADICIONA A CLASSE ATIVO NO SLIDE ATUAL
    slides[index].classList.add('ativo');


    // ADICIONA A CLASSE ATIVA NA BOLINHA ATUAL
    bolinhas[index].classList.add('ativa');

}


// BOTÃO PRÓXIMO
btnProximo.addEventListener('click', function(){

    // AVANÇA O ÍNDICE
    index++;

    // VERIFICA SE CHEGOU AO FIM
    if(index >= slides.length){
        index = 0;
    }

    // MOSTRA O SLIDE
    mostrarSlide();

});


// BOTÃO ANTERIOR
btnAnterior.addEventListener('click', function(){

    // VOLTA O ÍNDICE
    index--;

    // VERIFICA SE PASSOU DO INÍCIO
    if(index < 0){
        index = slides.length - 1;
    }

    // MOSTRA O SLIDE
    mostrarSlide();

});


// AUTO SLIDE
setInterval(function(){

    // AVANÇA O ÍNDICE
    index++;

    // VERIFICA SE CHEGOU AO FIM
    if(index >= slides.length){
        index = 0;
    }

    // MOSTRA O SLIDE
    mostrarSlide();

}, 3000);



// CLIQUE NAS BOLINHAS
bolinhas.forEach((bolinha, i) => {

    bolinha.addEventListener('click', function(){

        // MUDA O ÍNDICE PARA A BOLINHA CLICADA
        index = i;

        // MOSTRA O SLIDE
        mostrarSlide();

    });

});
//Fim Carrossel


