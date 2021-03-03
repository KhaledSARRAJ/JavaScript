const perso ={
    identite : "Oberyn Martell",
    force: 42, 
    arme: "pique",
    maison: "Martell"
}
const text = perso.identite + "a une force de " + 
perso.force + "et se bat avec une" + perso.arme+ ".";
console.log(text)

//Pour utiliser un template String,
//il faut débuter sa déclaration par des back tick:
//Alt + 96
//altgr+ 7
const text2 = `${perso.identite} a une force de ${perso.force}  et se bat avec une ${perso.arme} et appartient à la maison ${perso.maison ? perso.maison : "inconnue" } `;
console.log(text2);
const html = `
<ul>
    <li>${perso.identite}</li>
    <li>${perso.force}</li>
    <li>${perso.arme}</li>

</ul>
`;
console.log(html)