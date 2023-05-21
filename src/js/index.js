
const botaoAlterartema = document.getElementById("botao-altera-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema =document.querySelector(".imagem-botao");

botaoAlterartema.addEvenTListener("click", () => {

    const modoEscuroEstaAtivo =body.classList.contins("modo-escuro");

    body.classList.toggle("modo-escuro");
    
    if (modoEscuroEstaAtivo){body.classList.remove("modo-escuro");

imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

} else{
    body.classList.add("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    
}

});


