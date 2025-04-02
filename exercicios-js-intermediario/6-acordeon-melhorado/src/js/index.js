const perguntas = document.querySelectorAll(".item")

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click',() => {
        const itemAtivoAtual = document.querySelector('.ativo')
        if(itemAtivoAtual){
            itemAtivoAtual.classList.remove('ativo')
        }

        pergunta.classList.add('ativo')
    })
})