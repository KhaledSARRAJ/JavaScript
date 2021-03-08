//COMPARAISON

var a = 1;
var b = 2;

//Opérateur d'égalité
console.log(a == b);

//Opérateur de différence
console.log(a != b);

//Opérateur ternaire
console.log(a == b ? "Vrai" : "Faux");

//Opérateur supérieur ou égal
var age = 19;
var majeur = 18;

console.log(age >= majeur ? "Ok entre" : "Sors de là");

//Opérateur inférieur ou égal
console.log(majeur <= age ? "Ok entre" : "Sors de là");

//Opérateurs ET et OU

console.log(1 == 1 && 2 > 3);

var test = 1 == 2 | 2< 10;
console.log(test.__proto__);
console.log(1 == 2 || 2< 10);


//Le mode strict de comparaison === (prend en compte la valeur et le prototype)
console.log(1 == "1");
console.log(1 === "1");

console.log (1 !== "1");

