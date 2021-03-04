//Modifier des attributs
const lien = document.getElementsByTagName("a")[0];
console.log(lien.getAttribute("href"));
lien.setAttribute("href", "http://ecoleql.fr");
console.log(lien.getAttribute("href"));

// Modifier le style CSS d'un élément
const titre = document.getElementById("titre");
console.log(titre);
titre.style.color = "hotpink";
titre.style.fontFamily = "Arial";
titre.style.boxShadow ="2px 2px 10 px rgba(0,0,0,0.3)";

//Changer une HTMLCollection en Array
const textes = document.body.getElementsByTagName("p");
console.log(textes);
const arrayTextes =  Array.from(textes);
console.log(arrayTextes);
arrayTextes.map(paragraphe => paragraphe.innerHTML ="Tu es dans la matrice");

//Trouver la taille dun élément 
console.log(titre.offsetHeight, titre.offsetWidth);
console.log(titre.clientHeight, titre.clientWidth);

//Une autre façon de sélectionner des éléments du DOM
//QuerySelector

const para = document.querySelector(".para");
console.log(para)


const paras = document.querySelectorAll(".para");
console.log(paras);

const arrayParas = Array.from(paras);
console.log(arrayParas);