//LE DESTRUCTURING

//Le destructuring d'objet
const joueur = {
    nom: "Jon Snow",
    type : "Chevalier",
    arme : "épée"
}

//Imaginons que l'on reçoit un objet complexe d'une base de données et que l'on doive stocker chacunes de ses propriétés dans une variable:
// const nom = joueur.nom;
// const type =...

const {nom : nomJon, type, arme} = joueur;
console.log(nomJon);
console.log(type);
console.log(arme);

//Destructuring d'array

const stats = [154, 256, 85, 42];
const [attaque, defense, , magie] = stats;
console.log(attaque);
console.log(defense);
console.log(magie);

//Echanger des valeurs
let maCarte = "Goblin des marrais";
let taCarte = "Lotus noir";

[maCarte, taCarte] = [taCarte, maCarte];

console.log(maCarte);
console.log(taCarte);

//Mélanger le tableau version ES6

const randomize = arr =>{
    for (let i = 0; i < arr.length; i++ ){
        const random = Math.floor(Math.random() * arr.length);
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr;
}

console.log(randomize([1,2,3,4,5]));
