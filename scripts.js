/* JavaScript ( E qualquer linguagem)
    - Variavél
Um pedacinho da memória do computador,
que eu possso guardar o que eu quiser

    - Funções 
Pedacinho de código que só executa,
Quando é chamado


Botão -> For clicado -> Chamar a minha Função -> Ligar o SOM 
Document = HTML
querSelector (Selecionar ou pegar um item do html) 
( pedindo para procurar alguma coisa, esse alguma coisa é uma class, 
 essa class é o botao-som

- addEventListener - Sua vizinha fofoqueira (Ouvindo alguém te contar quando algo aconteceu */


let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

//Ligar o SOM
botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted = false
}

//Mostrar o Modal

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"

}

function esconderModal(){
    modal.style.display = "none"
}