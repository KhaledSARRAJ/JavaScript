//L'utilisateur tappe du texte dans la textarea. Je veux que les consonnes uniquement soient recopiées dans le label

const texte = document.querySelector("textarea");
const label = document.querySelector("label");

const voyelle = ["a", "e", "i", "o", "u", "y"];

const text = [];

texte.addEventListener("keypress", function(event){
    const lettre = event.key;
    if(!voyelle.includes(lettre.toLowerCase())){
        text.push(lettre);
    }
    label.innerHTML = text.join("");
});