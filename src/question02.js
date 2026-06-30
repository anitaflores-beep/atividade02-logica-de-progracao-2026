import leia from"readline-sync";

var nota1 = leia.questionFloat("nota 1:");
var maiorNota = nota1;
var menorNota = nota1

var nota2 = leia.questionFloat("nota 2:");
maiorNota = ( nota2 > maiorNota) ? nota2 : maiorNota;
menorNota = ( nota2 < menorNota) ? nota2 : maiorNota;

var nota3 = leia.questionFloat("nota 3:");
maiorNota = ( nota3 > maiorNota) ? nota3 : maiorNota;
menorNota = ( nota3 < menorNota) ? nota3 : maiorNota;

var nota4 = leia.questionFloat("nota 4:");
maiorNota = ( nota4 > maiorNota) ? nota4 : maiorNota;
menorNota = ( nota4 < menorNota) ? nota4 : maiorNota;

var nota5 = leia.questionFloat("nota 5:");
maiorNota = ( nota5 > maiorNota) ? nota5 : maiorNota;
menorNota = ( nota5 < menorNota) ? nota5 : maiorNota;

var nota6 = leia.questionFloat("nota 6:");
maiorNota = ( nota6 > maiorNota) ? nota6 : maiorNota;
menorNota = ( nota6 < menorNota) ? nota6 : maiorNota;

var media = ( nota1 + nota2 + nota3 + nota4 + nota5 + nota6);

console.log = ("SUA NOTA É:");