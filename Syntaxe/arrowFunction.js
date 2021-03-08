//LES FONCTIONS FLECHEES

function aFonction(toto){
    return toto * 5;
}

//Une fonction fléchée s'écrit sous forme d'une expression de fonction
const myFunction = toto => toto * 5;
console.log(aFonction(5));
console.log(myFunction(5)); 

const me = {
    name: "toto",
    present : salutation => salutation + " je m'appelle toto"
}
console.log(me.present("Hi"));

//Fonction fléchées sans argument

const sansArg = () => "Cousou arrow function sans argument";
console.log(sansArg());

//Fonction fléchée avec plusieurs arguments
const plusieursArg = (arg1, arg2, arg3) => `Coucou arrow function avec pour argument ${arg1} ${arg2} ${arg3}`;
console.log(plusieursArg("toto", "titi", "tutu"));

//Fonction fléchée avec traitement et retour
const traitementEtRetour = (number1, number2) => {
    let resultat = number1 + number2;
    return resultat;
}
console.log(traitementEtRetour(40,2));

//THIS: les fonctions vont toujours déterminer le THIS en fonction de leur contexte de déclaration!

//Avec ES6 on la possibilité de déterminer un argument par défaut pour une fonction
 function sayMyName(name = "No name"){
     console.log(name);
 }
 sayMyName("Toto");
 sayMyName();





