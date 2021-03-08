//Déclencher un évènement et ajouter/supprimer une classe

const titre = document.querySelector("h1");
const liens = document.querySelectorAll("a");

//Ajouter une classe css au titre lors du clock sur le lien Add
liens[0].addEventListener("click", function(event){
    console.log(event);
    console.log(titre.classList);
    titre.classList.add("fbi");
    console.log(titre.classList);
});

//Supprimer la classe CSS
liens[1].addEventListener("click", function(){
    titre.classList.remove("fbi");
});

//Toggle la classe CSS

liens[2].addEventListener("click", function(){
    titre.classList.toggle("fbi");
});


//Ecouter le clavier de l'utilisateur
addEventListener("keyup", function(event){
    //console.log(event);
    //this.console.log(event.key);
});

//Faire apparaître une image à l'endroit cliqué
addEventListener("click", function(event){
console.log(event);
const size = 100;
const image = document.createElement("img");
image.setAttribute("src", `http://lorempixel.com/${size}/${size}/` );
image.style.position = "absolute";
image.style.top = event.y - size/2 + "px";
image.style.left = event.x  - size/2 + "px";
document.body.appendChild(image);
});



