//Ceci est un commentaire mono ligne
/* Ceci est un commentaire
multi ligne*/

//Le console.log() permet d'afficher en console
console.log("Coucou AI 107");

//LES TYPES DE VARIABLES EN JS
//Number
console.log(42);

//String
console.log("Une chaine de caractères");

//Booleen
console.log(true);
console.log(false);

//null
console.log(null);

//undefined
console.log(undefined);

//Object
console.log({name: "Toto"});

//Fonction
function addition(a,b){
    return a + b;
}
console.log(addition);
console.log(addition(40,2));
console.log(addition("Hello ", "Toto"));

//Déclaration de variable et assignation une valeur
//Typage dynamique: le prototype d'une variable peut changer au cours de l'exécution
//d'un programme
var unChriffre;
unChriffre = 42;
console.log(unChriffre);

var chaine = "Une String";
console.log(chaine);
console.log(chaine.__proto__);

chaine = true;
console.log(chaine);
console.log(chaine.__proto__);

//Différence entre undefined, null et is not defined
//undefined
var a;
console.log(a);

//null
var selectedObject = {
    name: "tata",
    role: "présidente"
};
console.log(selectedObject);
selectedObject = null;
console.log(selectedObject);
// console.log(selectedObject.__proto__);

//is not defined
// console.log(titi);


