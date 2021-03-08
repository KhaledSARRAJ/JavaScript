function loadDoc(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.querySelector("#content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "texte.txt", true);
    xhttp.send();
}