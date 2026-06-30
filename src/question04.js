import leia from"readline-sync";

var valorHospedagem = leia.questionFloat("digite o valor da hospedagem:");
var quantidadeDeDiarias = leia.questionFloat("digite a quantidades de diarias:");
var idade = leia.questionFloat("digite sua idade:");
var temMaisDe60anos = leia.questionFloat("tem mais de 60 anos:");

var desconto = novaidade + (temMaisDe60anos - 0.20);
var desconto = novaidade + idade + ( 5 - 100);
var desconto = novaidade + idade + ( 6/10 - 0.90);
var desconto = novaidade + idade + ( 11 - 0.80);


var valor = (valorHospedagem + quantidadeDeDiarias + idade );
var valorComDesconto = (valorHospedagem + quantidadeDeDiarias + novaidade/temMaisDe60anos);

console.log(" O VALOR SERA DE" + valor);
console.log(" VALOR COM O DESCONTO SERA DE" + valorComDesconto);