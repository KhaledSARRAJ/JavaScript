
const text = document.querySelector("textarea");
const label = document.querySelector("label");

const  recop = [];
const voyelles =["a","e","i","o","u","y"];

text.addEventListener("keypress", function(event){
    const lettre = event.key.toLocaleLowerCase();
if(!voyelles.includes(lettre)){
    recop.push(lettre);
}
    label.innerHTML = recop.join("");
});