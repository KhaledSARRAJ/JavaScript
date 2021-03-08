const bar = document.querySelector(".bar");

addEventListener("scroll", function(){
const max = document.body.scrollHeight - this.innerHeight;
const pourcentage = this.pageYOffset/max * 100;
bar.style.width = pourcentage + "%";
console.log(`
Taille page : ${document.body.scrollHeight}
Taille affichage : ${this.innerHeight}
Position scroll : ${this.pageYOffset}
`)
});