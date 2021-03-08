//Valeur copié par valeur et copié par référence

//Les primitifs sont copiés par valeur
var x = 5;
var y = x;
y = 8;
console.log(y);
console.log(x);

//Les objets sont copiés par référence
var obj = {name : "toto"};
var obj2 = obj;
obj2.name = "titi";

console.log(obj);
console.log(obj2);