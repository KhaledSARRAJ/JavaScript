//HOISTING

//Les fonctions: avant l'execution, l'interpréteur JS va hisser les déclarations
//de fonction
addition(40,2);
function addition(a,b){
    console.log(a+b);
}

// soustraction(44, 2);
//Le hoisting ne fonctionne pas pour les expressions de fonction
var soustraction = function(a,b){
    console.log(a-b);
}

//Pour les variables: la déclaration est bien hisser mais pas la valeur
console.log(x);
var x =42;
console.log(x);

