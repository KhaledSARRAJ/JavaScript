//LE SPREAD OPERATOR
//Il sert à retourner le contenu d'un élément itérable

const listeAmis = ["cyril", "fred", "florian"];
const listeFamille = ["guillaume", "laura", "charles"];

console.log(listeAmis);
console.log(...listeAmis);

//Fusionner des tableaux en ajoutant une entrée
const liste = [...listeAmis, "serge", ...listeFamille];
console.log(liste);

//Copier un array
//const copieListe = liste;
const copieListe = [...liste];
copieListe.push("rufus");
console.log(copieListe);
console.log(liste);

//On peut aussi s'en servir pour push un array dans un autre array

const animaux = ["chat", "chien", "poisson rouge"];
const animaux2 = ["ours", "zèbre", "tigre"];
animaux.push(...animaux2);
console.log(animaux);

//On peut combiner le spread operator et le destructuring pour ranger dans un tableau une partie des variables destructurés
const uneListe = ["roger", "roberte", "christian", "rufus", "medor", "kawa"];
const [ami1, ami2, ami3, ...chiens] = uneListe;
console.log(ami1);
console.log(ami2);
console.log(ami3);
console.log(chiens);

//REST OPERATOR