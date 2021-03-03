//Les destructuring

const perso = {

    name: "Oberyn",
    surname: "Martell",
    weapon: "pique"
}
//Imaginons que je recoive cette objet à partir d'un appel
//de webservice et que je doive stocker
//chaque proprièté dans des variables
//const prenom = perso.name;
//const nom = perso.surname;
//const arme = perso.weapon;
const {name: prenom, surname, weapon}=perso;
console.log(prenom);
console.log(surname);
console.log(weapon);

//Le destructuring d'array
const stats=[123,45,12,45];
const [attaque,, defense, vitesse, puissance]= stats
console.log(attaque);
console.log(defense);
console.log(vitesse);


//Echanger des valeurs
let taCarte = "Dracaufeu";
let maCarte ="Ratatta";
[maCarte, taCarte]= [taCarte,maCarte]
console.log(maCarte)
console.log(taCarte)

//Exercie: randomize en ES6(en fonction fléchée et destructuring)
const randomize = (tb1)=>{
  for(let i =0; i<tb1.length; i++){
  const random = Math.floor(Math.random() * (tb1.length));
  [tb1[i], tb1[random]]= [tb1[random],tb1[i]]
  }
  return tb1;
}

console.log(randomize([1,2,3,4,5,6]));
