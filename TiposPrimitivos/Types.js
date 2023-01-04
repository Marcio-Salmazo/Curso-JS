const nome = "joana"; //String
const nome2 = 'joana'; //String
const nome3 = `joana`; //String

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