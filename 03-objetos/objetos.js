//Exemplo 1: Objeto básico
let livro = {
    //propriedade : valor
    titulo: 'Senhor dos Anéis',
    ano : 1954,
    volumes : 3,
    autor : "J.R.R. Tolkien" 
}

console.log (livro.ano);
//Meu livro preferido é o $titulo de livro. Objeto não tem indice como a matriz, mas sim, a propriedade
console.log(`Meu livro preferido é o ${livro.titulo}, que foi lançado em ${livro.ano}.`);

//Exemplo 2: Objeto contendo array e outro objeto
let pessoas = {
    nome : 'Certo Alguém',
    idade : 39,
    sexo : 'masculino', 
    telefones : ['2222-3333', '5555-6666'],
    cidade : 'São Paulo',
    medidas : {
        peso : 90,
        altura : 1.80
    }

};

console.log(pessoas.medidas.altura); //1.80
console.log(pessoas.telefones[1]); //5555-6666

//Certo alguém...
console.log (`Certo alguém é uma pessoa incrível, contrate através do telefone ${pessoas.telefones[1]}`);

//Exemplo 3: Array de Objeto

let livros = [
    {
        titulo : 'Senhor dos Anéis',
        autor : 'J.R.R Tolkien'
    },
    {
        titulo: 'Ghost Rider',
        autor : 'Neil Peart'
    },
    {
        titulo: 'Game of Thrones',
        autor : 'George R.R. Martin'
    }
];


console.log(`Meu livro favorito é ${livros[2].titulo} do autor ${livros[2].autor}`)