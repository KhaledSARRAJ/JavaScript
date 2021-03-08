//Les fonctions constructeurs

function Person (name, age){
    this.name = name;
    this.age = age;
    // this.present = function(){
    //     console.log("Hello my name is " + this.name);
    // };
}

Person.prototype.present = function(){
    console.log("Hello my name is " + this.name);
}

Person.prototype.hasOwnProperty = function(name){
    return "Coucou hasOwnProperty " + name; 
}
var toto = new Person("Toto", 42);
console.log(toto);
toto.present();

var titi = new Person("Titi", 24);
console.log(titi);
titi.present();

console.log(toto.present === titi.present);

console.log(toto.hasOwnProperty("name"));

//La chaine des prototypes
// toto --> Person.prototype -->Object.prototype