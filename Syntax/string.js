//Les chaines de caracteres

var texte = "Hello";
console.log(texte);
var texte2= 'Coucou';
console.log(texte2);
var texte3 = "Il a pas dit 'Bonjour'";
console.log(texte3);

//Echapper les caractères
var texte4 = 'Bonjour je m\'appelle Toto';
console.log(texte4);

var texte5 = "Fallait mieux dire \"Bonjour\"";
console.log(texte5);
var texte6 = "\t  coucou \n Toto";

console.log(texte6);


//Concaténation
var bonjour ="Bonjour";
var toto = "Toto";
console.log(bonjour + " " +toto);
var age = 10;
console.log(toto + " a " + age + " ans");
console.log(toto.__proto__);

//Longueur de notre String 
console.log(toto.length);
console.log(toto.toLocaleUpperCase());
console.log(toto.toUpperCase());

//Accéder à une caractère d'une chaine
console.log(toto[1]);

//En JS, une chaine de caractère est immutable o immuable
var monNom = "Thibaut";
console.log(monNom[monNom.length-1])
monNom[monNom.length-1]= 'd';
monNom= "Thibaud";
console.log(monNom);