//ATIVAR LINKS DO MENU
const links = document.querySelectorAll(".header-menu a"); //verificar se os links da página estão ativo

//quero ativar uma função para cada link
function ativarLink(link) {
  const url = location.href; // a informação da URl eu tenho dentro de location
  const href = link.href;
  /* o includes verifica se a palavra existe ou não na string, se trata do url lá do site que fica diferente a medida que vc interage nos objetos delas */
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
//ATIVAR ITENS DO ORÇAMENTO

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro); //getElementById pega meu ID da tag no HTM
  elemento.checked = true;
  console.log(elemento);
}

parametros.forEach(ativarProduto);
// console.log(parametros);

//perguntas frequentes

//seleciono dentro de perguntas, todos os botoes que tiverem
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa"); // quando eu clicar ele ativar e quando eu clicar d enovo ele desativa
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  // console.log(resposta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta); //ao lado é a function que vai ocorrer ao dar o click
}

//vou add para cada um deles, um evento de click
perguntas.forEach(eventosPerguntas);
console.log(perguntas);

//GALERIA DE BICICLETAS
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches; //abaixo de 1000px vai desativar o prepend
  if (media) {
    galeriaContainer.prepend(img); //prepend pega um elemento do html e joga em outra parte
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosGaleria);

// galeria.forEach(eventosGaleria);

//animação plugin anime

if (window.SimpleAnime) {
  new SimpleAnime();
}
