import leia from "readline-sync";

var num1 = leia.questionInt("informe primeiro numero: ");
var num2 = leia.questionInt("informe segundo numero: ");
var num3 = leia.questionInt("informe treceiro  numero: ");
var aux;

if(num1 > num2) {
    aux = num1;
    num1 = num2;
    num2 = aux;
}

if(num1 > num3){
    aux = num1;
    num1 = num3;
    num3 = aux;
}

if(num2 > num3){
    aux = num2;
    num2 = num3;
    num3 = aux;
}

console.log("a ordem formada é de:" + num1 + num2 + num3);