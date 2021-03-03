//LE SPREAD OPERATOR ...
const listeAmis =["Martin", "Jean", "Hassan", "Judith"];
const listeFamille = ["Olivier", "Emma", "Nick", "Roberta"];
console.log(listeAmis);
console.log(...listeAmis)

//Utilité
//Fusionner des tableaux en rajoutant une entrée au passage 
const listeFusion = [...listeAmis, "Banjo", ...listeFamille,"aaa"]
console.log(listeFusion);

const copieListe = listeFusion;
console.log(listeFusion)
copieListe.push("Kaawa");
console.log(copieListe);
console.log(listeFusion)

//Permet de dupliquer une liste sans partager de référence
const copie2 = [...listeFusion];
console.log(copie2);
copie2.push("Rufus");
console.log(copie2);
console.log(listeFusion);

//Utile pour push array dans un autre array
const listeAnimaux = ["rat", "chat", "chien"];
const listeAnimaux2 = ["poney", "loup", "ours"];
listeAnimaux.push(...listeAnimaux2);
console.log(listeAnimaux);

//On peut combiner le destructuring et le Rest operator
const uneListe = ["Martha", "Steven", "Marlo", "Rufus", "Medor","Rintinitin"];
const[humain1, humain2, humain3, ...chiens]= uneListe;
 console.log(humain1);
 console.log(humain2);
 console.log(humain3);
 console.log(chiens);