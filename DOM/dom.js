//SELECTIONNER UN ELEMENT DU DOM

const titre = document.body.getElementsByTagName("h1")[0];
console.log(titre);

const paragraphes = document.body.getElementsByTagName("p");
console.log(paragraphes);

const titre2 = document.getElementById("titre");
console.log(titre2);

//DEPLACER UN ELEMENT

//Bouger un élément pour le position avant un autre
//insertBefore(eltADéplacer, eltRéférence);
document.body.insertBefore(paragraphes[1], titre);

//Bouger un élément à la fin d'un contenant
document.body.appendChild(titre);

//Supprimer un élément
function removeTitle(){
    document.body.removeChild(titre);
}

//Création d'un node textuel
const nouveauTexte = document.createTextNode("Hello world");
document.body.appendChild(nouveauTexte);

//Création de n'importe quel élément
function ajouterTexte(pseudo, monTexte){
    const nouveauTexte = document.createElement("p");
    nouveauTexte.innerHTML = `<strong>${pseudo}</strong>: ${monTexte}`;
    document.body.appendChild(nouveauTexte);
}
ajouterTexte("Toto", "Salut Tata");
ajouterTexte("Tata", "Yo Toto!");

