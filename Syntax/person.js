class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    present(){
        console.log("Hi my name is " + this.name)
    }
}
var thib = new Person("Thib", 125);
console.log(thib);
thib.present();

var toto = new Person("toto", 72);
console.log(toto);
thib.present();
console.log(thib.present === toto.present)