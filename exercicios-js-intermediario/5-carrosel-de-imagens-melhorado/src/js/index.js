const slides = document.getElementsByClassName('slide')
const setaEsquerda = document.getElementById('seta esquerda')
const setaDireita = document.getElementById('seta direita')
var imagemAtual = 0

setaDireita.addEventListener('click',() =>{
    if(imagemAtual === slides.length -1){
        return
    }

    slides[imagemAtual].classList.remove('mostrar') 
    imagemAtual++
    slides[imagemAtual].classList.add('mostrar')
    setaSemImagens()
})

setaEsquerda.addEventListener('click',() =>{
    if(imagemAtual === 0){
        return
    }

    slides[imagemAtual].classList.remove('mostrar') 
    imagemAtual--
    slides[imagemAtual].classList.add('mostrar')
    setaSemImagens()  
})


function setaSemImagens(){
    const primeiroSlide = imagemAtual == 0
    if(primeiroSlide){
        setaEsquerda.classList.add('transparente')
    }else{
        setaEsquerda.classList.remove('transparente')
    }
    
    const ultimoSlide = imagemAtual == slides.length -1
    if(ultimoSlide){
        setaDireita.classList.add('transparente')
    }else{
        setaDireita.classList.remove('transparente')
    }
}