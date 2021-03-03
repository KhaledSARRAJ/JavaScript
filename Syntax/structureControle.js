//Les structures de controle

//Le if et le else
function estTuFort(force) {
    if(force >= 15){
        return "tu es très fort !";
    }else if (force >=10){
        return "Tu es fort";
    }else if (force >=5){
        return "Mmm pas super fort";
    }else {
        return "Tu es faible";
    }
}
console.log(estTuFort(15));

//Switch case 
var fruit ="Papaye";
switch (fruit){
    case "Orange":
        console.log("Les oranges coûtent 1,50 euros le kilo");
        break;
    case "Mangue":
        console.log("Les mangues coûtent 2.5 à l'unité");
    case "Papaye":
         console.log("Les papayes coûtent 4 euros le kilo");
     break;
     default:
         console.log("Désolé, nous n'avons pas de " + fruit + "en stock");
}

//Exercice

function niveau(tableau) {

    var moyenne =  (tableau[0] + tableau[1] + tableau[2]) / tableau.length;

    if(moyenne >= 16){
        return "C'est trés bien!";
    }else if (moyenne >= 10){
        return "C'est bien";
    }else {
        return "mmm pas terrible";
    }
}
console.log(niveau([3,1,5]));

//Ecrivez la fonction niveau qui fait la moyenne des trois notes du tableau
//transmis en parametre et renvoie
//              "C'est trés bien": si la moyenne est supèrieure à 16
//              "C'est bien": si la moyenne est supèrieure ou égale à 10
//              "mmm pas terrible": si la moyenne est inférieu à 10





    
