//LES STRUCTURES DE CONTROLE

//LE if et le else

function esTuFort(force){
    if(force >= 15){
        return "Tu es très fort";
    } else if (force >= 10){
        return "Tu es fort";
    }else if(force >= 5){
        return "Tu es faible";
    }else{
        return "Tu es vraiment faible";
    }
}

console.log(esTuFort(1));

//Le switch

var fruit = "Pitaya";

switch (fruit){
    case 'Orange' :
        console.log("Les oranges coûtent 1€ le kilo");
        break;
    case 'Papaye' :
        console.log("Les papayes coûtent 3€ le kilo");
        break;
    case 'Mangue':
        console.log("Les mangues coûtent 4€ le kilo");
        break;
    default :
        console.log("Désolé, nous n'avons pas de " + fruit + ".");
}

//Exercice calculer moyenne
//Ecriez la fonction appréciation qui fait la moyenne des notes du tableau
//transmis en pramètres et qui qui renvoie une appréciation:
    //"C'est très bien" si la moyenne est supérieure ou égal à 15
    //"C'est bien" si la moyenne est supérieur ou égal à 10
    // "C'est très très très mal" si la moyenne est inférieur à 10
function appreciation(notes){
    var moyenne = (notes[0] + notes[1] + notes[2]) / notes.length;
    if(moyenne >= 15){
        return "C'est très bien";
    }else if(moyenne >= 10){
        return "C'est bien";
    }else{
        return "C'est très très mal";
    }
}

console.log(appreciation([12, 20, 17]));