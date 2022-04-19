// Estruturas de controle de repetição 

// While (enquanto)
// do/while (faça/enquanto)
// for (para uma determinada quantidade de vez)

//Exemplo 1: while

let i = 1;
while(i<11) {
    console.log(`O valor de i é ${i}`);
    i++
}

// Exemplo 2: do/while

let j = 1;
do {
    console.log(`J é ${j}`);
    j++;
} while (j<10)

//  Exemplo 3: for 
for( let k = 1; k <= 5; k++ ){
    console.log(`k vale ${k}`);
}

console.log("------------------");

let alunos = [  
    "Adriel", "Brenda", "Vini", "Leo", "David"
]; 

//Cache do tamanho array
let tamanho = alunos.length;

for(let i = 0; i < tamanho; i++ ){
    console.log(alunos[i]);
}





