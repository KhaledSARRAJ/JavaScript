//This 
//La winfow dans le navigateur est l'objet global
//Par defaut, dans le contexte global, le this 
//vers cette window

console.log(this);

//This dans le cadre du contexte d'éxécution
//d'une fonction
function first() {
    console.log(this)
}
first();
//This dans le cadre de l'éxécution d'une fonction
//qui est proprièté d'un objet
//Dans ce cas, le this pointe vers l'objet à partir de lequel
//la fonction est exécutée
var me ={
    name: "Toto",
    present : function () {
        console.log(this);
        
    }
}
me.present();
//Attention
var me2 = {
    name: "Titi",
    present2: function () {
        console.log("Dans present2: " + this);
        console.log(this);
        function insideFunction() {
            console.log("Dans insideFunction()" +this);
        }
        insideFunction();
    }
}
me2.present2();