//LES NOMBRES ALEATOIRES

//La fonction Math.rand() qui renvoie un nombre aléatoire compris dans
//l'interval [0,1[

//Un nombre aléatoire compris entre [0,5[

var random = Math.random() * 5;
console.log(random);

//Un entier aléatoire

var randomInt = Math.floor(Math.random() * 5);
console.log(randomInt);

//Créer un entier aléatoire compris entre un maximum et un minimum
function randBetween(min, max){
    return Math.floor(Math.random() * (max + 1 -min) + min);
}

console.log(randBetween(5,12));


//console.log(randomize([1,2,3,4,5]));

// function randomize(valeurs) {
//     result = [];
//     while (valeurs.length > 0) {
//         var index = randBetween(0, valeurs.length - 1);
//         var valeur = valeurs[index];
//         // console.log(valeur);
//         result.push(valeur);
//         valeurs.splice(index, 1);
//     }
//     return result;
// }

function randomize(arr){
    var temp;
    var random;
    for(var i = 0; i < arr.length; i++){
        random = Math.floor(Math.random() * arr.length);
        temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }
    return arr;
}

console.log(randomize([1, 2, 3, 4, 5]));


