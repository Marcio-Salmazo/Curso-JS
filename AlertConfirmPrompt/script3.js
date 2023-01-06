//A deve apontar para B
//B deve apontar para C
//C deve apontar para A

let varA = 'A';
let varB = 'B';
let varC = 'C';

let auxA = varA;
varA = varB;
varB = varC;
varC = auxA;

/*
Alternativo:

[varA, varB, varC] = [varB, varC, varA];

*/


console.log(varA, varB, varC);