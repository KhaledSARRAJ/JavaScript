//LA CONSTRUCTION DE PROTOTYPE
function Person (name, age){
    this.name = name;
    this.age = age;
//    this.present = function(){
    //    console.log("Hello my name is " + this.name)
   // }
}
Person.prototype.present = function(){
    console.log("Hello my name is " + this.name);
}
var toto = new Person ("Toto", 42);
console.log(toto);

var tutu = new Person ("Tutu", 72);
console.log(tutu);
tutu.present();
console.log(tutu.present === toto.present)

console.log(tutu.__proto__);
console.log(tutu.__proto__.__proto__);

Person.prototype.hasOwnProperty = function(name){
    console.log("Coucou "  + name);


}
tutu.hasOwnProperty("name")

//tutu <-- Person <-- Object
