//Ceci est un commentaire monoligne
/*Ceci est un commentaire multiligne*/
//Impression console

//Les Types de Variable:

//1: Les String: chaines de caractère
console.log("Hello console !!");
console.log("Toto");
console.log("Tata");

//2 : Les numbers
console.log(42);

//3: Les booleens
console.log(true);
console.log(false);

//4: Les objects
console.log({name:"Toto", surname:"de Toto"});

//5: Les fonctions
function addition (a,b){
    return a+b;
}
//6: Appel fonction
console.log(addition);
//7: Exécutuion fonction
console.log(addition(4,5));
console.log(addition("Hello", "Toto"));

//8: Null (type)
console.log(null);
//9: Undefined
console.log(undefined);

//Déclaration de variable et typage dynamique
var unNomEnLowerCamelCase = 2;
console.log(unNomEnLowerCamelCase);

console.log(unNomEnLowerCamelCase.__proto__);

unNomEnLowerCamelCase = "Une chaine de caractère";
console.log(unNomEnLowerCamelCase);
console.log(unNomEnLowerCamelCase.__proto__);

//Différences entre undefined, null, is not defined

//1 : Undefined: variable bien déclarée mais sans valeur
var a;
console.log(a);
console.log("Le script continue son exécution");

//2 : Null: Volontairement on affecte une valeur null à une variable
var selectedObject = {
    name: "tata"

};
console.log(selectedObject);
var selectedObject = null;

console.log(selectedObject);

console.log("Le script continue son exécution");

//3: is note defined: erreur lorqu'on invoque une variable non déclarer
//console.log(titi);
//console.log("Le script continue son exécution");

