//LES OBJETS
//Déclaration d'un objet
var chevalier ={
    "force":15,
    vitesse:5,
    faiblesse : ["mage", "ninja"]
}
console.log(chevalier)

//Acceder aux proprietes d'un objet
console.log(chevalier.force);
console.log(chevalier["force"]);
var requete = "vitesse";
console.log(chevalier[requete])

console.log(chevalier.faiblesse[1])
//Manipuler les proprietes d'un objet
//Modifier la valeur de la propriété d'un objet
chevalier.force = 20;
console.log(chevalier);

//Ajouter une propriété à un objet

chevalier.arme = "épée";
console.log(chevalier);
//Supprimer une propriété

delete chevalier.arme;
console.log(chevalier);

//Tester si un objet possède une propriété
console.log(chevalier.hasOwnProperty("force"));
console.log(chevalier.hasOwnProperty("arme"));
//Un objet peut avoir comme attribut un autre objet


var rufus = {
    name: "Rufus",
    race: "Corgi",
    jouet: {
        marque : "Pupsit",
        forme: "os",
        prix: 42,
    }
};
console.log(rufus);
chevalier.compagnon = rufus;
console.log(chevalier);