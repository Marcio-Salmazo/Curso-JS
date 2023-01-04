//Coletar dados do usuário e exibi-los
//Calcular IMC

const nome = "Luiz Miranda";
let idade = 30;
let peso = 84;
let altura = 1.8; 
let nasc = 2023 - idade;
 
let imc = peso / (altura*altura);
console.log(nome, "tem", idade, "anos, pesa", peso, "kg. Tem", altura, "de altura e seu IMC é de", imc, nome, "nasceu no ano de", nasc);