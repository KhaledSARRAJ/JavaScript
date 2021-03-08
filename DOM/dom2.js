//MODIFIER LES ATTRIBUTS D'UN ELEMENT DU DOM

const lien = document.getElementsByTagName("a")[0];
console.log(lien.getAttribute("href"));
lien.setAttribute("href", "http://google.fr");
console.log(lien.getAttribute("href"));

//CHANGER UNE LISTE d'ELEMENTS EN ARRAY
const texte = document.getElementsByTagName("p");
console.log(texte);
const texteArray = Array.from(texte);
console.log(texteArray);
texteArray.map(para => para.innerHTML = "Tu es dans la matrice");

///Modifier le style css d'un élément

const titre = document.getElementById("titre");
titre.style.color = "hotpink";
titre.style.fontFamily = "Arial";

//Une autre façon plus pratique pour récupérer des éléments du DOM
//querySelector
//classe .classe
//id #id
//const leTitre = document.querySelector("h1");
const leTitre = document.querySelector("#titre");
console.log(leTitre);

const paragraphes = document.querySelectorAll(".para");
console.log(paragraphes);
const paraArray = Array.from(paragraphes);
paraArray.map(paragraphe => paragraphe.style.color = "teal");


