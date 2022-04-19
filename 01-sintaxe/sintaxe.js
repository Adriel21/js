// comentário de linha - atalho CTRL ; 
/* bloco de comentário - atalho ALT A */

//comando de saída para o console
console.log("Olá, mundo!");


//Variáveis 
//Palavras-chaves: var, let, const 
//const -> const de escopo de bloco//

const nome = "Adriel"; // constante
let ano = 2022; // variável de escopo local
var curso = "Técnico de informática para Internet"; //variável global 

// ano = 2025; // A última atribuição que vai ser constada
// curso = "Como se tornar uma princesa";
// nome = "Inacinho"; 




// recuperando os valores 
console.log(nome);
console.log(ano);
console.log(curso)

//concatenação
console.log("Eu sou o " +nome+ ".");
console.log("Eu sou o " +nome+ ", e em " +ano+ " estou estudando no " +curso+ ".");

//String literal - template string
console.log(`Atualmente, estamos fazendo o curso de ${curso}`); //Forma mais atual de concatenar usando crase
console.log(`Eu sou o ${nome} e em ${ano} estou estudando no ${curso}.`);


// Operadores matemáticos:
// + adição
// - subtração
// / divisão
// * multiplicação

let produto = "Tv Led";
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade; 

console.log(`Temos atualmente no estoque o produto ${produto} na quantidade de ${quantidade}, ao custo de ${preco} cada e o valor total é ${total}`);

