//LES STRUCTURES DE REPETITION

//La boucle while

var i = 0;
var triangle = [];

while(i < 10){
    i++;
    triangle.push("#");
    console.log(triangle);
}


//La boucle do while

var result = 3;
do {
    result++;
}while(result < 5);

console.log(result);

//La boucle for

for(var j = 0; j < 10; j++){
    console.log(j);
}

var arr = [10, 45, 42, 58];
var resultat = 0;
for (var k = 0; k < arr.length; k++){
    resultat += arr[k];
}
console.log(resultat);


//For each sur un array:  for of

for (var valeur of arr){
    console.log("valeur: " + valeur);
}

//For each sur un objet: for in
var obj = {
    libelle : "un truc",
    taille : "42 cm",
    couleur : "rouge"
}
for (var prop in obj){
    console.log(prop);
    console.log(obj[prop]);
}


//Calcul de moyenne
function moyenne(notes){
    var total = 0;
    for (var l = 0; l < notes.length; l++){
        total += notes[l];
    }
    return total/notes.length;
}

console.log(moyenne([10, 15, 18, 02, 16, 12, 10]));

//la fonction map permet d'itérer sur un array tout en appliquant un traitement
//aux valeurs

var tableau = [1, 2, 3, 4, 5];

var tableauPlusUn = tableau.map(function(nombre){
    return nombre + 1;
});

console.log(tableauPlusUn);


