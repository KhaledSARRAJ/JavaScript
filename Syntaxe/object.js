//LES OBJETS

//Déclaration d'un objet

var chevalier = {
    force : 15,
    vitesse : 5,
    faiblesse : ["mage", "ninja"],
    action : function(){
        console.log("mon action")
    }
}

console.log(chevalier);

//Accéder aux propriétés d'un objet
console.log(chevalier.force);
//ou
console.log(chevalier["force"]);

var requete = "vitesse";
console.log(chevalier[requete]);

chevalier.action();

//Accéder à une tableau dans un objet
console.log(chevalier.faiblesse[0]);

//Manipuler les valeurs des propriétés d'un objet
chevalier.force = 20;
console.log(chevalier.force);

// Ajouter une propriété à la volée
chevalier.arme = "épée";
console.log(chevalier);

//Supprimer une propriété à la volée
delete chevalier.arme;
console.log(chevalier);

//Tester la présence ou l'absence d'un propriété dans un objet
console.log(chevalier.hasOwnProperty("force"));
console.log(chevalier.hasOwnProperty("arme"));

//On peut mettre un objet dans un objet
var chien = {
    race : "",
    age : 2,
    jouet : {
        marque : "pupsit",
        forme : "rond"
    }
}
console.log(chien);

chevalier.compagnon = chien;
console.log(chevalier);

