// Estrutura de Controle condicional 

// if/else, else if 
let nome = "Klaibert";
let idade = 11;

// Verificar a idade da pessoa

// Condicional encadeada

let mensagem;

// if (condicao) {
  //  comando
//}

/*
if (idade >= 18) {
     mensagem = "Você é maior de idade";
} else { 
     mensagem = "Você é menor de idade";
} 

 document.write(mensagem); - exibe na tela
 console.log(mensagem);
 */

 if (idade>=60) {
   mensagem = "É idoso";
 } else if (idade >= 18) {
   mensagem = "É adulto, mas não é idoso";
 } else {
   //mensagem = "É menor de idade";
      //condicional aninhada - quando temos uma dentro da outra
     if (idade >=12 && idade < 18) {
    mensagem = "É adolescente";
     } else {
     mensagem = "É baby shark";
   }

 }



 console.log(`${nome}, ${mensagem}`);
 console.log (nome, mensagem);
 console.log (nome+", "+mensagem);


 let nota1 = 0;
 let nota2 = 10;
 let nota3 = 10;
 let nota4 = 10;

 let media = (nota1+nota2+nota3+nota4)/4;

 let conceito;

//  if (media>=7) {
//     conceito = "Aprovado";
//  } else {
//     conceito = "Reprovado";
//  }

//   document.write(conceito);

media>=7?conceito="aprovado":conceito="Reprovado";

document.write(conceito);

console.log("---------------")

// switch/case/default/break

let opcao = 4;

switch(opcao) {
  case 1:
    textoOpcao = "Legal, o que deseja saber?";
    break; //Importante aplicar break para que após a opção for indicada, ele não execute todas

  case 2:
    textoOpcao = "Que pena, o que aconteceu?";
    break;

  case 3:
    textoOpcao = "Certo, qual sua dúvida?";
    break;

  default:
    textoOpcao = "hum, não entendi... vou te transferir";
    break;
}
  
console.log(`Você escolheu a opção ${opcao}`);
console.log(textoOpcao);


// Operadores de comparação
let a = 10;
let b = "10";

console.log(a===b);