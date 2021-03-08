//Le mot clé this

//L'objet window est l'objet de référence du contexte global.
console.log(this);

//Le this dans le contexte d'exécution d'une fonction:
function first(){
    console.log("Coucou First")
    console.log(this);
}
first();


//Le this dans le cadre de l'xecution d'une fonction par un objet
//Le this pointe vers l'objet a qui appartient la fonction:
var me = {
    name: "Thibaud",
    present: function(){
        console.log(this);
    }
}
me.present();


//Attention si une fonction est utilisé à l'intérieur d'une fonction d'un objet
//le this sera à nouveau l
var me2 = {
    name: "Thibaud",
    present: function(){
        console.log(this);
        function insideFunction(){
            console.log(this);
        }
        insideFunction();
    }
}
me2.present();

//LA FONCTION BIND

first();

//J'aimerais que cette fonction first ait un this qui pointe
//vers mon objet me

var firstBindToMe = first.bind(me);
firstBindToMe();

//J'amerais que la fonction present de l'objet me pointe vers l'objet
//global
var presentWindow = me.present.bind(window);
presentWindow();

//CALL et APPLY: Elle permette de binder le this tout en exécutant un traitement

function multiply(number1, number2){
    console.log(this);
    console.log(number1 * number2);
}

var me3 = {
    name: "toto"
};

multiply(2,2);

//Le call permet de binder tout en exécutant le traitement

multiply.call(me3, 4,4);

//Le apply fait la même chose à part qu'il prend en deuxième argument
//un array plutôt que des valeurs

multiply.apply(me3, [21,2]);