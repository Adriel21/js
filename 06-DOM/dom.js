/* Métodos/Funções de acesso e seleção

getElementById() -> seleciona um elemento pelo ID

querySelector() 
-> seleciona UM elemento de acordo com um seletor

querySelectorAll() 
-> seleciona VÁRIOS elementos de acordo com um seletor */

// selecionando pelo ID
const titulo = document.getElementById('titulo-principal');
console.log(titulo);

// selecionando pela TAG
const pagina = document.querySelector('body');
console.log(pagina);

// selecionando todas as TAGS H2
const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);


/* Modificando elementos */
titulo.textContent = "Olá Mundo!";
subtitulo[1].textContent = "Full Stack";

const legenda = document.querySelector('figcaption');
legenda.innerHTML = "<b>Ilustração do DOM</b>";


// CSS via JS
titulo.style.textAlign = "center";
titulo.style.backgroundImage = 'linear-gradient(lightyellow, lightblue)';


const listaEditores = document.querySelector('#lista-editores');

const ultimo = listaEditores.querySelector('li:last-child');
// ultimo.style.background = 'red';
// ultimo.innerHTML = "<strong>Deu ruim</strong>";

// const primeiro = listaEditores.querySelector('li:first-child');
// 
// const outro = listaEditores.querySelector('li:nth-child(2)');
// outro.innerHTML = '<strong>Deu ruim</strong>';
// outro.style.color = 'Red';

ultimo.classList.add('destaque-item');


//Adicionando o atributo target em todos os links da lista de referências
//Selecionando todos os linls contidos na lista

//Toda vez que usamos querySelectorALL, ele devolve uma matriz
const links = document.querySelectorAll('ul li a');
// links[0].style.color = 'Red';
console.log(links);



for (let i = 0; i < links.length; i++) {
  links[i].setAttribute('target', '_blank');
}






