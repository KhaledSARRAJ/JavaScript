 //Premier trait en canvas:
            var canvas1 = document.querySelector('#canvas1');
            var ctx1 = canvas1.getContext('2d');
            ctx1.beginPath(); //Je commence un chemin
            ctx1.moveTo(100,100);//Je me déplace de 100 px vers la droite et de 100px vers le bas
            ctx1.lineTo(300, 300);
            ctx1.lineWidth = 10; //épaisseur du trait
            ctx1.strokeStyle = 'blue'; //couleur du trait
            ctx1.stroke(); //tracer le trait       
            ctx1.beginPath();
            ctx1.strokeStyle = "hotpink";
            ctx1.lineCap = 'round'; //round et mitter
            ctx1.moveTo(100, 300);
            ctx1.lineTo(300,100);
            ctx1.stroke();
            
            //Premier polygone:
            
            var canvas2 = document.querySelector('#canvas2');
            var ctx2 = canvas2.getContext('2d');
            ctx2.beginPath();
            ctx2.lineWidth = 10;
            ctx2.moveTo(100,100);
            ctx2.lineTo(300,100);
            ctx2.lineTo(200,250);
            ctx2.lineJoin = "bevel"; //mitter, round
            ctx2.closePath();//ferme le chemin ouvert
            ctx2.stroke();
            ctx2.fillStyle = "red"; //définit la couleur de remplissage
            ctx2.fill(); //Applique la couleur de remplissage
            
            //Premier rectangle:
            
            var cansvas3 = document.querySelector('#canvas3');
            var ctx3 = cansvas3.getContext('2d');
            ctx3.beginPath();
            ctx3.fillStyle = "green"; //couleur du rectangle
            ctx3.fillRect(100, 100, 200, 200); //tracé du rectangle
            ctx3.lineWidth = 10; //épaisseur de la bordure
            ctx3.strokeStyle = "red";
            ctx3.strokeRect(100,100,200,200); // tracé de la bordure
            
            //Effacement de forme:
            
            var canvas4 = document.querySelector('#canvas4');
            var ctx4 = canvas4.getContext('2d');
            ctx4.beginPath();
            ctx4.fillStyle = 'red';
            ctx4.fillRect(100, 100, 200, 200);
            ctx4.clearRect(130,180, 140, 40); //Effacement d'une partie du rectangle
            ctx4.clearRect(180, 130, 40, 140);
            
            //Tracé de cercle
            var canvas5 = document.querySelector('#canvas5');
            var ctx5 = canvas5.getContext('2d');
            var X = canvas5.width;
            var Y = canvas5.height;
            ctx5.fillStyle = "blue";
            ctx5.arc(X/4, Y/4, X/6, 0, Math.PI);
            ctx5.fill();
            
            ctx5.beginPath();
            ctx5.fillStyle = "green";
            ctx5.arc(X/1.5, Y/4, X/6, 0, Math.PI * 2);
            ctx5.fill();
            
            ctx5.beginPath();
            ctx5.fillStyle = 'yellow';
            ctx5.arc(X/4, Y/1.5, X/8, 0.25 * Math.PI, 1.25 * Math.PI);           
            ctx5.fill();
            
            ctx5.beginPath();
            ctx5.arc(X/4, Y/1.5, X/8, 0.75 * Math.PI, 1.75 * Math.PI);
            ctx5.fill();
            
            
            ctx5.beginPath();
            ctx5.arc(X/4, Y/1.65, X/40, 0 , Math.PI*2);
            ctx5.fillStyle = "black";
            ctx5.fill();
            
            //Courbe quadratique:
            
            var canvas6 = document.querySelector('#canvas6');
            var ctx6 = canvas6.getContext('2d');
            ctx6.beginPath();
            ctx6.moveTo(50, 200);
            ctx6.quadraticCurveTo(150, 350, 300,200); //coordonnées d'inflexion + coordonnées d'arrivée
            ctx6.stroke();
            
            //Courbe de Bézier cubique:
            
            var canvas7 = document.querySelector('#canvas7');
            var ctx7 = canvas7.getContext('2d');
            ctx7.beginPath();
            ctx7.lineWidth = 10;
            ctx7.strokeStyle = "red";
            ctx7.moveTo(50,200);
            //Mêmes arguments que pour la courbe quadratique mais avec un point d'inflexion en plus:
            ctx7.bezierCurveTo(100, 300, 100, 80, 300, 200);
            ctx7.stroke();           