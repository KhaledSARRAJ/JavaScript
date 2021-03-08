class Person {

    constructor(name, age){
        this.name = name;
        this.age= age;
    }

    present(){
        console.log("Hello my name is " + this.name);
    }

}

var toto = new Person("Toto", 33);
console.log(toto);