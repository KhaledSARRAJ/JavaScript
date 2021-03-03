//VAR LET CONST

//Les problèmes du var : 


//1: Avec var, j'ai le droit de déclarer plusieurs fois
//la même référence
var arme = "épée";
console.log(arme);
var arme = "lance";
console.log(arme);
//Avec let et const
//Dans un même script, les références des let et const
//doivent être uniques
let habit = "chemise";
console.log(habit)
//let habit = "pantalon";





//2: Le hoisting
//console.log(toto);
var toto = "test";


//pas de hoisting de déclaration pour les let et les const
//console.log(uneConst)
const uneConst = "Tata";


//3: Le scope de fonction n'es pas trés logique;
//on préférerait un scope de block
//function choixGun(){
    //var gun = "colt";

  //  console.log(gun);
//}
if(42 > 0) {
var gun = "colt";

}
//choixGun();
console.log(gun);

//Avec les let et les const, le scope s'établit
//au niveau du block
function choixGun(){
    let flingue = "colt";

    console.log(flingue);
}
choixGun()
if(42 > 0) {
    let flingue = "colt";
    
    }
{
        let flingue = "colt";
        
 }
//console.log(flingue)
//Différences entre let et const
//Une let peut être déclarée sans être initialiser
//alors qu'une const non;

let exemple;
exemple =" Un exemple";
const exemple2 ="uneValeur";
//Pour une variable contenant une donnée primitive
//interdit le changement de valeur là ou le let le permet

let serie = "SNK";
serie = "The Wire";



const film =  "Matrix";
//film = "aa";
//Cela est différent quand il est question d'objet
//Un const qui contient un objet autorise le
//changement de valeur des propriétés de l'objet
//mais interdit toute réassignation
const perso = {
    name: "Jon",
    surname: "Snow",
    arme : "épée"
};
perso.name = "Stark";
console.log(perso);
//perso = {
 //   name: "Robert",
 //   surname: "Barathéon",
 //    arme : "masse"
//};

//UTILISATION DU VAR LET CONST
//1.On n'utilise plus le var
//2: Toujours utiliser le const par défaut
//3: Si ma variable va changer de valeur au cours de l'éxécution de mon 
//programme, j'utilise le let