document
    .querySelector("div")
    .addEventListener('click',function(event){
        event.target.classList.contains('azul') === false ? event.target.classList.add('azul') : event.target.classList.remove('azul');
    })