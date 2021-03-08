//FONCTIONS ET SCOPE

//Déclaration d'une fonction

function maFonction (){
    console.log("Coucou fonction");
}

console.log(maFonction);
maFonction();

function addition(a,b){
    console.log(a+b);
}
addition(40,2);

function addition(a,b){
    return a+b;
}
var result = addition(40,2);
console.log(result);

//LE SCOPE DES VARIABLES
//var num = 5;
//Les var ont un scope de fonction
function testScope(){
    var num = 42;
    console.log(num);
}
//onsole.log(num);
//testScope();