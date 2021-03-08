//Les templateString sont un nouveau d'écrire les chaînes de caractères en permettant 
//de faciliter la concaténation des String et des variables, et de
//conserver l'indentation.

const perso = {
    nom: "Jon Snow",
    force: 15,
    arme : "épee",
    maison :"Stark"
}
const texte = perso.nom + " à une force de " + perso.force + " et se bat avec une " + perso.arme + ".";
console.log(texte);

//Les templates String s'écrivent entre backtick (Alt+96)
const texte2 = `${perso.nom} à une force de ${perso.force} et se bat avec une ${perso.arme}.`;
console.log(texte2);

const texte3 = `${perso.nom} appartient à la maison ${perso.maison ? perso.maison : "inconnu"}`;
console.log(texte3);

const html = `
<ul>
    <li>Nom: ${perso.nom}</li>
    <li>Force: ${perso.force}</li>
    <li>Arme ${perso.arme}</li>
</ul>
`
console.log(html);
