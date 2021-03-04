function loadTitle(){
    const xhttp = new XMLHttpRequest();
    const div = document.querySelector("#content");
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           // console.log(this.response);
            const jsonResponse = JSON.parse(this.response);
            console.log(jsonResponse);
            jsonResponse.results.map(result => {
const titre = document.createElement("h4");
titre.innerHTML = result.title;
div.appendChild(titre);
            });
        }
    }
    xhttp.open("GET","https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=e792bec495619ac3ee80ecd78425d013",true);
xhttp.send();
}