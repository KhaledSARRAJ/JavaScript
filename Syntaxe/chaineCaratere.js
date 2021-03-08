//LES CHAINES DE CARATERES

var texte = "Coucou";
console.log(texte);

var autreTexte = 'Hello';
console.log(autreTexte);

var bonjour = "Il a dit 'Bonjour'";
console.log(bonjour);

var bonjour2 = "Il a pas dit \"Bonjour\"";
console.log(bonjour2);

var str1 = "Hello";

var str2 = "Toto";

console.log(str1 + " " + str2);

console.log(str1.length);

//accéder à un char dans un chaine
console.log(str1[2]);


//Immutabilité des chaines de caractères

var monPrenom = "Thibaut";
console.log(monPrenom[monPrenom.length-1]);
monPrenom[monPrenom.length-1] = 'd';
console.log(monPrenom);
monPrenom = "Thibaud";
console.log(monPrenom);

