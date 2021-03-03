//LES ARRAYS (simple tableau)

//Déclaration d'un array vide

var tableau = [];
console.log(tableau);

//Déclaration d'un tableau plein
var tableau1 =["attaque","défense"];
console.log(tableau1);

//Creer un tableau à partir de valeurs existantes

var nom = "Thibaud";
var age = 72;
var  tableau2 = [nom, age, tableau1]
console.log(tableau2)
//Accéder  aux valeurs d'un array
console.log(tableau2[0]);
console.log(tableau2[2][1])
//Un array est mutable
tableau2[0]="Toto";
console.log(tableau2)
tableau2[2][0]="puissance";
console.log(tableau2)
//Methode/proprietes utilitaires
console.log(tableau2.length)

//Ajouter et supprimer des données dans un array
var arr =[1,2,3];
//ajouter une entrée à la fin de l'array
arr.push(4);
console.log(arr)
//Ajouter une entree au debut de l'array
arr.unshift(0)
console.log(arr)
//suppression d'une entrée à la fin
arr.pop();
console.log(arr);
//supprimer la première entrée du tableau

arr.shift();
console.log(arr);

//Stocker de l'élément supprimé dans un array
var pop = arr.pop();
console.log(arr)
console.log(pop);
var shift = arr.shift();
console.log(arr);
console.log(shift);

//La fonction splice
var mois = ["Janvier", "Mars", "Avril","Mai"];
mois.splice(1,0,"Févirer");
console.log(mois)
mois.splice(4,-1,"Mai")