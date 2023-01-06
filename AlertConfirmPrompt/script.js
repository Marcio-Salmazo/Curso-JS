/*
O objeto Window é o principal ponto de entrada para todos 
os recursos e APIs de Javascript do lado do cliente. 
Ele representa uma janela ou quadro de navegador Web 
e pode ser referenciado através do identificador window. 
Em Javascript do lado do cliente, o objeto Window 
também é o objeto Global. Isso significa que o 
objeto Window está no topo do encadeamento de escopo 
e que suas propriedades e métodos são efetivamente 
variáveis globais e funções globais.
*/

//Métodos do objeto Window

//Exibição de mensagem em janela
//O retorno não aponta para um espaço na memória
alert('Hello World');

//Retorna um boolean
let conf = window.confirm('Deseja confirmar?');

//Retorna o valor inserido
let str = window.prompt('Digite uma string');