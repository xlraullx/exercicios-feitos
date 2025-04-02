const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
    input.addEventListener('change',() => {
        if(input.value !== ""){
            input.classList.add("input-preenchido")
        } else{
            input.classList.remove("input-preenchido")
        }
    })
});