const setas = document.getElementsByClassName('seta')
const setaEsquerda = setas[0]
const setaDireita = setas[1]
const titulo = document.querySelector('h1')
const bntSaibaMais = document.querySelector('a')

setaDireita.addEventListener('click',() => {
    let body = document.querySelector('body')

    if(body.classList.value === ('')){
        titulo.innerHTML = 'Título imagem 2'
        bntSaibaMais.style.color = '#D9DD10'
        setaEsquerda.classList.remove('seta-canto')
        body.classList.add('bkg-flores')

    } else if (body.classList.value === ('bkg-flores')){
        titulo.innerHTML = 'Título imagem 3'
        bntSaibaMais.style.color = '#A63A17'
        body.classList.remove('bkg-flores')
        body.classList.add('bkg-floresta')

    } else if (body.classList.value === ('bkg-floresta')){
        titulo.innerHTML = 'Título imagem 4'
        bntSaibaMais.style.color = '#10ACDD'
        body.classList.remove('bkg-floresta')
        body.classList.add('bkg-cordilheiras')
        setaDireita.classList.add('seta-canto')
    }
})

setaEsquerda.addEventListener('click',() => {
    let body = document.querySelector('body')

    if(body.classList.value === ('bkg-cordilheiras')){
        titulo.innerHTML = 'Título imagem 3'
        bntSaibaMais.style.color = '#A63A17'
        body.classList.remove('bkg-cordilheiras')
        setaDireita.classList.remove('seta-canto')
        body.classList.add('bkg-floresta')

    } else if(body.classList.value === ('bkg-floresta')){
        titulo.innerHTML = 'Título imagem 2'
        bntSaibaMais.style.color = '#D9DD10'
        body.classList.remove('bkg-floresta')
        body.classList.add('bkg-flores')

    } else if(body.classList.value === ('bkg-flores')){
        titulo.innerHTML = 'Título imagem 1'
        bntSaibaMais.style.color = '#C50000'
        body.classList.remove('bkg-flores')
        setaEsquerda.classList.add('seta-canto')
    }
})