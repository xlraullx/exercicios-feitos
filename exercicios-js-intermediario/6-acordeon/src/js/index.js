const perguntas = document.querySelectorAll('span[class="pergunta"]')

perguntas.forEach((perguntas) => {
    perguntas.addEventListener('click',() => {
        const perguntaRadio = perguntas.children[0]
        const resposta = perguntas.nextElementSibling
        let setaAberta = perguntas.querySelector('img')
        perguntaRadio.checked = true

        fecharRespostas()     
        
        if(perguntaRadio.checked === true){
            setaAberta.src = "src/imgs/seta-aberta.png"
            resposta.classList.add("mostrar")
        }

    })
});

function fecharRespostas(){
    perguntas.forEach((perguntas) => {
        const resposta = perguntas.nextElementSibling
        let setaFechada = perguntas.querySelector('img')

        setaFechada.src = "src/imgs/seta-fechada.png"
        resposta.classList.remove("mostrar")
    })    
};