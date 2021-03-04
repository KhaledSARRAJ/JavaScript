const titre = document.querySelector("h1");
let i =3;
function compteur(){
    titre.removeEventListener("click",compteur)
titre.addEventListener("click", function(){
    const compte = setInterval(function(){
        console.log(i);
        if(i > 0){
            titre.textContent = i; 
        }else {
            titre.textContent = "Go !"
        }
        i--;
    },1000);
})
}
titre.addEventListener("click", compteur)