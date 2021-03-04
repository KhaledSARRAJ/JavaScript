//DOM
//Trouver et séléctionner un noeud du DOM

//getElementByTagName renvoie une HTMLCollection qui 
//contient les éléments correspondant à la balise ciblèe 

const titres = document.body.getElementsByTagName("h1");
console.log(titres);

const textes = document.body.getElementsByTagName("p");
console.log(textes);
const other = document.body.getElementsByTagName("li");
console.log(other);

//Je veux le premier paragraphe
const para1 = textes[0];
console.log(para1);

//On peu trouver un élément à partir de son id ou de sa class
const titre = document.getElementById("titre");
console.log(titre);


const paras = document.getElementsByClassName("para");
console.log(paras);

//DEPLACER DES ELEMENTS DU DOM
//Bouger un élément en le placant avant un autre élément
//insertBefore(eltDeplacer, eltDeRéférence)
document.body.insertBefore(para1,titre);

//Bouger un élément à la fin d'un contenant 
document.body.appendChild(titre);

//Supprimer un élément
function removeTitle(){
document.body.removeChild(titre);
}
//removeTitle();

//Creer un nouvel élément
//Insérer du texte
const newText = document.createTextNode("Hello AI108");
document.body.appendChild(newText);

//Creer n'importe quel type de balise
function addMessage(pseudo, text){
    const newTag =document.createElement("p");
    newTag.innerHTML = `</strong> <strong>${pseudo}</strong> : ${text}`
document.body.appendChild(newTag);
}
addMessage("Toto", "slt sava")
addMessage("Tata", "Je ne réponds pas au 'slt sava'")