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

var funcao = () => {   
    console.log("Função Seta/Flecha (Arrow Function)");
}

funcao();  //Chamando a função
