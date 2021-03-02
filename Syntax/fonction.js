//Les fonctions et les scopes
//déclaration d'un fonction
function maFonction(){
    console.log(2+2);

}
//Appelle d'une fonction:
maFonction();
//Fonction avec arguments/paramétres
function addition(num1, num2){
    console.log(num1+num2);
}
addition(40,2);
//Fonction qui retourne une valeur
function multiplication (a,b){
    return a*b;
}
var result = multiplication(21,2);
console.log(result);
//SCOPE
var num = 5;

function testScope(){
  //  var num =36;
  console.log(num)  ;
}
testScope()
console.log(num);

//Passer une fonction en argument d'une fonction 
function addTwo(number){
    return number + 2;
}
function myFunction(argFunction, nb){
    var x = argFunction (nb);
    console.log(x)
}
myFunction(addTwo, 40);

//Une fonction qui return une autre fonction:
function returnFunction(){
    return function(number){
        return number *2;
    }
}console.log(returnFunction);
console.log(returnFunction());
console.log(returnFunction()(2));

//J'ai la possibilité de stocker dans une expression
//une fonction retournée par une autre fonction
var fonction = returnFunction();
console.log(fonction);
console.log(fonction(15));

//IIFE: Immediatly Invoked Function Expression
var maClasse = (function() {
    console.log("toto");
    var myName = "Thibaud";
})();

//console.log(muName);

//LES CLOSURES
function multiplyBy(number) {
    var closedVariable = number;
    return function (anotherNumber) {
        return closedVariable*anotherNumber;
    }
}

var multiplyByFive =  multiplyBy(5);
console.log(multiplyByFive);

console.log(multiplyByFive(5));

var multiplyByThree = multiplyBy(3);
console.log(multiplyByThree(5))


