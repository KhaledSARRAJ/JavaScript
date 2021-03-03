//La fonction Math.rand() permet de générer 
//un nombre aléatoire compris entre 0 et 1
var random = Math.random() * 5;
console.log(random);

//Obtenir un entier aléatoire
var randomEntier = Math.floor(Math.random() * 10);
console.log(randomEntier)

//Obtenir un nombre aléatoire 
//maximum et un minimum
function rangRandom(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
    
}
console.log(rangRandom(42,72));


//Exercice
function randomize(tb1) {
var temp = 0;
var random = 0;
for(var i =0; i<tb1.length; i++){
random = Math.floor(Math.random() * (tb1.length));
temp = tb1[i];
tb1[i]=tb1[random];
tb1[random]= temp;
}
return tb1;


} 
console.log(randomize([1,2,3,4,5,6]))

function tbb(t1) {
    var t1 = (t1[1]+t1[2]+ t1[3]) / t1.length;

    if(t1 > 10){
        return "vous etes fort";
    }else{
        return"faible";
    }
}
console.log(tbb[15,22,31,4]);
