listaPerguntas = [
{
  pergunta: "Qual o maior ser vivo?",
  opcoes : [
    "Baleia azul",
    "Fungo de Mel",
    "Elefante",
    "Girafa"
  ],
  correta: 1
}, 
{
  pergunta: "Qual a primeira capital do Brasil",
  opcoes : [
    "Taquara",
    "Brasilia",
    "Salvador",
    "Rio de Janeiro"
  ],
  correta: 2 
},
{
  pergunta: "Em que ano o Brasil ganhou sua segunda Copa do Mundo",
  opcoes : [
    "1974",
    "1970",
    "1966",
    "1962"
  ],
  correta: 3
}
]
  
  objpergunta = null;
    
  telainicial = document.querySelector(".tela-inicial")
  telaPergunta= document.querySelector(".tela-pergunta")
  telaAcertou= document.querySelector("tela-acertou")
  telaErrou= document.querySelector("tela - errou")
  botaoiniciar = document.querySelector(".iniciar ");
  botaoiniciar.addEventListener("click", iniciarjogo);
  
   divpergunta = document.querySelector(". pergunta ");
   
botao0 = document.querySelector(".opcao0")
botao1 = document.querySelector(".opcao1")
boatao2 = document.querySelector(".opcao2")
baotao3 = document.querySelector("opcao3")

telaAcertou.addEventListener("clik", () => {
  telaAcertou.style.display = "none"
  iniciarjogo()
})

function iniciarjogo() {
  telainicial.style.display = "none";
  telaPergunta.style.display ="block";
  
  mostrarPergunta();
}
botao0.addEventListener("click", () => {
  if (objpergunta.correta == 0) {
    mostrarAcertou()
  }else {
    mostrarErrou()
    
  }
})

botao1.addEventListener("click", () => {
  if (objpergunta.correta == 1) {
    mostrarAcertou()
  }else {
    mostrarErrou()
    
  }
})

botao2.addEventListener("click", () => {
  if (objpergunta.correta == 2) {
    mostrarAcertou()
  }else {
    mostrarErrou()
    
  }
})

botao3.addEventListener("click", () => {
  if (objpergunta.correta == 3) {
    mostrarAcertou()
  }else {
    mostrarErrou()
    
  }
})





  function mostrarPergunta() 
    objpergunta = listaPerguntas[0];
    
    textoPergunta = document.createTextNode("objPergunta.pergunta");

    divpergunta.appendChild(textoPergunta);
    
    txtOpcao1 = document.createTextNode(objpergunta.opcoes[0]);
    botao0 = document.querySelector(".opcao0");
    botao0.appendChild(texOpcao1);
    
    txtOpcao1 = document.createTextNode(objpergunta.opcoes[1]);
    botao0 = document.querySelector(".opcao1");
    botao0.appendChild(texOpcao2);
    
    txtOpcao1 = document.createTextNode(objpergunta.opcoes[2]);
    botao0 = document.querySelector(".opcao2");
    botao0.appendChild(texOpcao3);
    
    txtOpcao1 = document.createTextNode(objpergunta.opcoes[3]);
    botao0 = document.querySelector(".opcao3");
    botao0.appendChild(texOpcao4);
    
  
  
  function mostrarAcertou() {
   telaPergunta.style.display = "none" 
   telaAcertou.style.display = "block"
  }
  
  function mostrarErrou() {
    telaPergunta.style.display = "none"
    telaErrou.style.display = "block"
  }
    
    
    
  


