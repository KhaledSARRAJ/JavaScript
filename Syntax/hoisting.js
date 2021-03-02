//HOISTING 

//pour les fonctions: l'interpréteur début par hisser (mettre en mémoire:)
//1: Les déclarations de fonction et les déclaration des variables
//2: les instructions
addition(40,2);


function addition(a,b){
    console.log(a+b);
}

//Pour les variables: mis en mémoire les 
//déclarations des variables mais pas leur valeur
console.log(x);
var x = 42;

//Pas de hoisting pour les expressions de fonction

var soustraction = function (a,b){
    console.log(a-b);
}
soustraction(44,2);