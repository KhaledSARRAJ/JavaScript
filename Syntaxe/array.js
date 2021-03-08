//LES ARRAY

var nom = "Thibaud";
var age = 72;

//Déclaration d'un array vide
var array = [];
console.log(array);

//Déclaration d'un array plein
var stats = ["attaque", "défense"];

array = [nom, age, stats];
console.log(array);

//Accéder à une valeur dans un array
console.log(array[1]);

//Accéder à une array dans un array
console.log(array[2][1]);

//Un array n'est pas immutable
array[0] = "Toto";
console.log(array);
array[2][1] = 42;
console.log(array);

//Taille d'un array
console.log(array.length);

//Ajouter et supprimer des données dans un array

var arr = [1, 2, 3];
//ajouter une entrée à la fin d'un array
var input = arr.push(4);
console.log(input);
console.log(arr);
//ajouter une entrée au début d'un array
arr.unshift(0);
console.log(arr);
//supprimer la première entrée de mon array
var out = arr.shift();
console.log(arr);
console.log(out);
//supprimer la dernière entrée d'un array
var out2 = arr.pop();
console.log(arr);
console.log(out2);
//Splice delete le nombre un certain nombre d'élément à partir d'un index ciblé
arr.splice(1,2);
console.log(arr);



