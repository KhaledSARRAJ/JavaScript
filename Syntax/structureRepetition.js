//Les STRUCTURES DE REPETITION
//La boucle while
var i = 0;
var triangle =[];
while(i < 10){
    i++;
    triangle.push("#");
    console.log(triangle);
}

//La boucle do while
var result = 5;
do{
    result ++;

}while(result < 5);
console.log(result);

//La boucle for
for(var j =10; j>=0;j--){
    console.log(j);
}
//Iterer sur des émélements itérables (array, objet)
var arr =[10, 12, 45, 78];
for(var i =0; i< arr.length; i++){
    console.log(arr[i]);
}

for(var valeur of arr){
    console.log("Valeur:" + valeur);
}

var obj = {
    name : "Jon",
    surname: "Snow",
    armes: ["épée", "dague"]
}
for (var prop in obj){
    console.log(obj[prop])
}
var tableau = [1,2,3,4,5]; //map rassemble a foreach
var tableauPlusUn = tableau.map(function(nombre){
return nombre+1;
});
console.log(tableauPlusUn)

//EXERCICE
function moyenne(tab) {
    var total =0;
    var moy = 0;
    for( var i =0; i<tab.length; i++){
        var total = (total+ tab[i]);
    }
    moy =total/ tab.length
    return(moy)
    
}

console.log(moyenne([1,12,14,18,19,20]));