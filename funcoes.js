/* Sintaxe 1 (tradicional)
Função Literal/Anônima*/

let exemplo1 = function() {
    console.log('Função anônima / literal');
};

//Chamando a função
exemplo1();

/*Sintaxe 2 (tradicional)
Função nomeada*/
function exemplo2() {
    console.log('Função nomeada');
}

exemplo2(); // Chamando a função


/*Sintaxe 3 (moderna)
Função Seta/Flecha (Arrow Function)*/

var exemplo3 = () => {   
    console.log("Função Seta/Flecha (Arrow Function)");
};

exemplo3();  //Chamando a função

let exemplo3b = () => console.log('Arrow Function B');
exemplo3b();

//Sintaxe nomeada
function dobra(valor) {
   return valor*2;
};

console.log(dobra(10));

//Sintaxe com Arrow Function

let dobraB = (valor) => {
    return valor*2;
};
console.log(dobraB(100));

let dobraC = valor => valor*100;
console.log(dobraC(20));



/*Exemplos anteriores*/
let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

//Sintaxe padrão
function formataMoeda(valor) {
return valor.toLocaleString('en',{
    style: 'currency',
    currency: 'USD'});
}

//Sintaxe arrow
let formataValor = valor => {
return valor.toLocaleString('JP', {
    style: 'currency',
    currency: 'BRL'});
}

console.log(formataValor(7777))