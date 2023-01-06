//coletar dados de usuário pelo navegador
//Escrever informações no body html via JS
//Manipular as Strings

const nome = window.prompt('Informe seu nome!');
window.document.body.innerHTML = `Nome inserido: ${nome}<br>`;

const str_legth = nome.length;
document.body.innerHTML += `Seu nome tem ${str_legth} letras <br />`;

//POR QUE ELE NÃO PEGA O SEGUNDO CARACTERE APÓS ESPAÇO INICIAL
var index = 1;
while(nome.charAt(index) == ' '){
    index++;
}
let scn_letter = nome.charAt(index);
document.body.innerHTML += `A segunda letra do seu nome é: ${scn_letter}<br />`;

document.body.innerHTML += `Qual o primeiro índice da letra "o" no seu nome? ${nome.indexOf('o')}<br />`;
document.body.innerHTML += `Qual o último índice da letra "o" no seu nome? ${nome.lastIndexOf('o')}<br />`;

document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.charAt(str_legth-3)}, ${nome.charAt(str_legth-2)}, ${nome.charAt(str_legth-1)}<br />`;
document.body.innerHTML += `As palavras do seu nome são:  ${nome.split(' ')}<br />`;

document.body.innerHTML += `Seu nome com letras maiúsculas:  ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas:  ${nome.toLocaleLowerCase()}<br />`;
