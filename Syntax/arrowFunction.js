//Les fonctions flechees
//Syntaxe : arg => return 

function aFunction(arg){
    return arg *3 ;
}
console.log(aFunction(3));
const arrowFunction = arg => arg *3 ;
console.log(arrowFunction(3));
//On peut l'utiliser dans un objet
const me = {
    name: "Thib",
    presentFriend: function(friend){
        return"Tu connais " + friend + "? ";
    }
};
console.log(me.presentFriend("Toto"));

const me2 = {
    name: "Thib",
    presentFriend: friend => `Tu connais ${friend} ?`
}
console.log(me2.presentFriend("tutu"));
//Fonction fléchée sans argument: parametre vides à la place de l'arg
const sansArgument = ()=> console.log("ArrowFunction sans argument") ;
sansArgument();
//Fonction fléchée avec plusieurs arguments: les arguments sont mis entre parenthèse et séparer par virgule
const plusieursArguments = (pers1 ,pers2) =>console.log(`Je te présente ${pers1} et ${pers2}`);
plusieursArguments("Toto","Titi");
const traitementAvantRetour = (nb1,nb2) =>{
    let resultat = nb1+nb2;
    return resultat;
};
console.log(traitementAvantRetour(40,2));
//Donner un parametre par défaut à une fonction
function sayMyName(name = "No Name"){
    console.log(name);
}
sayMyName("Thibaud");
sayMyName();
