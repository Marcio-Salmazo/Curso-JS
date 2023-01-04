 /*
Em JavaScript, toda variável é “elevada/içada” (hoisting) 
até o topo do seu contexto de execução. 
Esse mecanismo move as variáveis para o topo do 
seu escopo antes da execução do código.
 */

/*
LET

Tudo o que estiver cercado por chaves é um bloco.
Assim, uma variável declarada com let em um bloco 
estará disponível apenas dentro daquele bloco.
*/

/*
VAR

Declarações com var tem escopo global ou escopo de 
função/local.
O escopo é global quando uma variável var é declarada 
fora de uma função. Isso significa que qualquer 
variável que seja declarada com var fora de um bloco 
de função pode ser utilizada na janela inteira.
*/

/*
OBSERVAÇÃO

Assim como var,  uma variável declarada com let pode 
ser atualizada dentro de seu escopo. Diferente de var, 
no entanto, uma variável let não pode ser declarada 
novamente dentro de seu escopo.
*/

var nome = "Jonas";
console.log(nome);

let number = 12;
console.log(number);

//Exemplo do escopo de Let
let message = "say Hi";
if (true) {
    let message = "say Hello instead";
    console.log(message); // retornará "say Hello instead"
}
console.log(message); // retornará "say Hi"

//Variáveis VAR podem ser re-declaradas
var aula = "definições";
var aula = "novas definições";
console.log(aula);