   var canvas = document.querySelector("#canvas");
            var ctx = canvas.getContext('2d');
            
            //Dimensions du jeu:
            
            var X = canvas.width;
            var Y = canvas.height;
            
            //Variables pour la balle:
            var balleX, balleY;
            var balleDX;
            var balleDY;
            var rayonBalle;
            
            //Variables pour la raquette:           
            var raquetteX, raquetteY;
            var raquetteW, raquetteH;
            
            //Variable pour le score:
            var score = document.querySelector('#score');
            var point = score.innerHTML;
            
            
            init();
            dessinRaquette();
            dessinBalle();
            
            document.querySelector("#button").onclick = function(){
                
                var boucle = setInterval(jeuBalle, 20);
                
                //evenement clavier:
                
                document.onkeydown = function(e){
                    if(e.keyCode == 37 && raquetteX > 0){
                        raquetteX -= 20;
                        
                    }
                    if(e.keyCode == 39 && raquetteX + raquetteW < X ){
                        raquetteX += 20;
                    }
                }
                
                function jeuBalle(){
                    //On vide le canvas:
                    ctx.clearRect(0, 0, X, Y);
                    //On dessine la raquette et la balle
                    dessinRaquette();
                    dessinBalle();
                    
                    //On incrément la position de la balle:
                    balleX += balleDX;
                    balleY += balleDY;
                    
                    //Si la balle touche le bord droit ou le bord gauche:
                    if(balleX + balleDX > X - rayonBalle || balleX + balleDX < rayonBalle){
                        balleDX *= -1
                    }
                    
                    //Si la balle touche le bord du haut:
                    if(balleY + balleDY < rayonBalle){
                        balleDY *= -1;
                    }
                    
                    
                    //Si la balle touche le bord du bas:
                    if(balleY + balleDY > Y - rayonBalle){
                        //Si la ball touche la raquette:
                        if(balleX > raquetteX  && balleX < raquetteX + raquetteW){
                            balleDY *= -1.2;
							balleDX *= 1.2;
                            point++;
                            score.innerHTML = point;
                        }else{
                            clearInterval(boucle);
                            alert("Perdu");
                            init();
                        }
                    }
                                      
                }
                //boucle de jeu
            }
            
            
            function init(){
                balleX = 150;
                balleY = 50;
                balleDX = 6;
                balleDY = 6;
                rayonBalle = 30;
                raquetteX = 225;
                raquetteY = 680;
                raquetteH = 20;
                raquetteW = 150;
                point = 0;
                score.innerHTML = 0;
                
            }
            
           function dessinRaquette(){
                ctx.fillStyle = "blue";
                ctx.beginPath();
                ctx.fillRect(raquetteX, raquetteY, raquetteW, raquetteH);
               ctx.closePath();
            }
            
            function dessinBalle(){
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(balleX, balleY, rayonBalle, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            