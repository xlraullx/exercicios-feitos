document
    .getElementById("bntTrocaCor")
    .addEventListener('click', function () {

        let blocoAzul = document.querySelector("div")

        if (blocoAzul.classList[1] == "azul") {
            blocoAzul.classList.remove("azul")
            blocoAzul.classList.add("amarelo")

        } else if (blocoAzul.classList[1] == "amarelo") {
            blocoAzul.classList.remove("amarelo")
            blocoAzul.classList.add("azul")
        }
    })