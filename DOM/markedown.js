
const text = document.querySelector("textarea");
const render = document.querySelector("div");
//text.value = localStorage.getItem("texte");
if(text.value){
    render.innerHTML = marked(localStorage.getItem("text"));
}

text.addEventListener("keyup", function(){
    //localStorage.setItem("texte",texte.value)
    render.innerHTML = marked(text.value);
});