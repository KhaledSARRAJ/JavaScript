//En JS, une fonction peut être passée en argument d'une autre fonction

function addTwo(number){
    return number + 2;
}

function myFunction(argFunction, number){
    var x = argFunction(number);
    console.log(x);
}
myFunction(addTwo, 40);

//Une fonction peut aussi retourner une autre fonction

function returnFunction(){
    return function(number){
        return number * 2;
    }
}

console.log(returnFunction);
console.log(returnFunction());
console.log(returnFunction()(21));

var multiplyByTwo = returnFunction();
console.log(multiplyByTwo(2));

//LES CLOSURES

function multiplyBy(number){
    return function(anotherNumber){
        return number * anotherNumber;
    }
}

var multiplyByFive = multiplyBy(5);
console.log(multiplyByFive);
console.log(multiplyByFive(5));

//IIFE: Inmmedialtly Invoked Function Expression
(function(){
    console.log("toto");
})();