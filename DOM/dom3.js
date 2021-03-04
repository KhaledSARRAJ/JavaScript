//Je récupère le titre les liens
const titre = document.querySelector("h1");

const liens = document.querySelectorAll("a");

//Ajouter la classe CSS fbi au titre lors d'un événement
//déclenché par un click sur le lien ADD
liens[0].addEventListener("click", function(event){
    console.log(event);
    console.log("Coucou evnt !");
    console.log(titre.classList);
    titre.classList.add("fbi");
    console.log(titre.classList);
});
liens[1].addEventListener("click", function(){
    titre.classList.remove("fbi");
});

liens[2].addEventListener("click", function(){
    titre.classList.toggle("fbi");
});

this.addEventListener("keyup", function(event){
    console.log(event.key);
});
//Faire apparaître une image au click
addEventListener("click", function(event){
    console.log(event);
    const size = 100;
    const image = document.createElement("img");
    image.setAttribute("src", `http://lorempixel.com/${size}/${size}`);
    image.style.position= "absolute";
    image.style.top = event.y - size/2 +"px";
    image.style.left = event.x - size/2 + "px";
    document.body.appendChild(image);
})