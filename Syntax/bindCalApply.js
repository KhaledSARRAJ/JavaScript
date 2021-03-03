function first() {
    console.log("Dans méthode first: " + this);
}
first();
var me = {
    name: "Toto",
    present: function () {
        console.log(this);
    }
};
me.present();

var second = first.bind(me)
second();

var third = me.present.bind(window);
third();


//CALLA et APPLY permettent de binder, d'executer la focntion
//et de transmettre des arguments à la fonction 
function multiply(a,b) {
    console.log(this);
    console.log(a * b);
    
}
multiply(42 , 42);
multiply.call(me, 12, 45);
multiply.apply(me, [5,5]);