const nome = "joana"; //String
const nome2 = 'joana'; //String
const nome3 = `joana`; //String
/*
Obs: Para as Strings a barra invertida é um
caractere de escape, ou seja:

let str = "um"texto"" -> resulta em erro
let str = "um\"texto\"" -> retorna a string Um "texto"
*/

//obs 2: As strings são indexadas (array de caracteres)

/*
As strings podem ser manipuladas por métodos próprios
do JS, como por exemplo:

let str = "Uma string aleatória";
str.charAt(3);
str.indexOf('o');
str.match(/[a-z]/);
str.replace('uma', 'outra');
str.length();

etc
*/

const num1 = 10; //Number
const num2 = 100.56; //Number

let nomeAluno; //undefined -> não aponta para local na memória
let nomeAluno2 = null; //nulo -> explicitamente não aponta para local na memória
let aprovado = false; //Boolean (lógico)

//exemplo
console.log(typeof aprovado, aprovado);
//Retorno do tipo da variável e seu respectivo valor

//Observação:
//Cuidado em confundir valores de tipos primitivos e
//valores passados por referência (que apontam para um
//mesmo espaço na memória)