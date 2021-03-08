//VAR LET CONST

//Les problèmes liés au mot clé var

// Déclarer deux variables du même nom dans un même script
//Même comportement avec let et const

var arme = "épée";
console.log(arme);

var arme = "lance";
console.log(arme);
//Une let et une const ne peuvent être déclaré qu'une fois avec la même référence
let armure = "maille";
//let armure = "plate";

//Hoisting
console.log(toto);
var toto = "toto";
//console.log(tata);
const tata = "tata";


//var a un scope de fonction

function uneFonction(){
    var titi = "titi";
    //let tutu = "tutu";
}

if(true){
    var titi = "titi";
   // let tutu = "tutu";
}
{
    let tutu = "tutu";
}
console.log(titi);
// console.log(tutu);

//Différence entre let et const

//Une const doit être initialisée à sa déclaration
let exemple;
exemple = "ex";

// const autreExemple;
// autreExemple = "ex";

//On peut changer le contenu d'une let

let serie = "The Expanse";
console.log(serie);
serie = "Osmosis";
console.log(serie);

//On ne peut pas changer le contenu d'une const initialisée avec
//un primitif
const film = "Matrix";
// film = "Las Vegas Parano";

//On peux changer la valeur des propriétés d'un objet stocké dans
//une const mais on ne peut pas changer la référence de l'objet en
// mémoire

const perso = {
    nom: "Jon Snow",
    force : 15,
    arme : "épée"
}

perso.nom = "Oberyn Martel";
console.log(perso);

// perso = {
//     nom:"Oberyn Martel",
// }

//Quand utiliser une var, une let ou une const:
//1-On n'utilise plus de var
//2. Par défaut, on utilise une const
//3. Si on se rend compte que la const va changer de valeur ou de référence
//pour un objet, on utilise une let.