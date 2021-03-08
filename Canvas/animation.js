 //Première animation:
            var canvas1 = document.querySelector('#canvas1');
            var ctx1 = canvas1.getContext('2d');
            var X = canvas1.width;
            var Y = canvas1.height;
            //Taille initiale du rayon:
            var rayon = 10;
            //Taille minimale du rayon:
            var minRayon = 10;
            //Taille maximale du rayon:
            var maxRayon = X/2;
            // Variation de taille du rayon
            var variation = 1;
            setInterval(animate, 50);
            
            //Toutes les 50 ms, la fonction animate est appelée:
            function animate(){
                ctx1.clearRect(0,0,X,Y);
                ctx1.beginPath();
                ctx1.arc(X/2, Y/2, rayon, 0, Math.PI * 2);
                ctx1.fillStyle = 'yellow';
                ctx1.fill();
                if(rayon == maxRayon) variation = -1;
                if(rayon == minRayon) variation = 1;
                rayon += variation;               
            }
            
//Deuxième animation
            var canvas2 = document.querySelector('#canvas2');
            var ctx2 = canvas2.getContext('2d');
            var X2 = canvas2.width;
            var Y2 = canvas2.height;
            var image = new Image();
            image.src = "crs.png";
            var xImage = 0;
            setInterval(animate2, 20);
            
            function animate2(){
                if(xImage >= X2){
                    xImage = 0;
                }else{
                    xImage +=2;
                }
                ctx2.clearRect(0, 0, X2, Y2);
                ctx2.drawImage(image, xImage, Y2/2.5);
            }
            
            
            //Première collision:
            
            var canvas3 = document.querySelector('#canvas3');
            var ctx3 = canvas3.getContext('2d');
            //Dimensions de notre canvas:
            var X3 = canvas3.width;
            var Y3 = canvas3.height;
            //Rayon de la balle:
            var rayon3 = 20;
            //Coordonnées initales de la balle:
            var x3 = X3/2;
            var y3 = Y3/2;
            //Sens de déplacement de la balle:
            var sensX = 3;
            var sensY = 3;
            
            setInterval(animate3, 25);
            
            function animate3(){
                //On vide notre canvas
                ctx3.clearRect(0, 0, X3, Y3);
                ctx3.beginPath();
                ctx3.fillStyle = "red";
                ctx3.arc(x3, y3, rayon3, 0, Math.PI *2);
                ctx3.fill();
                
                //Si la balle touche le bord bas ou le bord haut
                if(y3 > Y3 - rayon3 || y3 < rayon3){
                    sensY *= -1;
                }
                
                //Si la balle touche le bord droit ou le bord gauche:
                
                if(x3 > X3 - rayon3 || x3 < rayon3){
                    sensX *= -1;
                }
                
                
                //Deplacement de notre balle:
                
                x3 += sensX;
                y3 += sensY;
                
            }
            
            //texte animé:
            
            var canvas4 = document.querySelector("#canvas4");
            var ctx4 = canvas4.getContext('2d');
            var X4 = canvas4.width;
            var Y4 = canvas4.height;
            //Coordonnées initiales du texte:
            var x4 = X4;
            var y4 = 50;
            //Style de notre texte:
            ctx4.textBaseline = 'middle';
            ctx4.font = 'bold 60px gothic';
            ctx4.strokeStyle = "white";
            ctx4.lineWidth = 3;
            
            setInterval(deplacement, 20);
            
            function deplacement(){
                ctx4.clearRect(0, 0, X4, Y4);
                x4 -= 2;
                if(x4 < -500){
                    x4 = X4;
                }
                ctx4.strokeText('RIP Johnny', x4, y4);
            }
            
            
            
            
            
            
            
            
            
            
            
            
            
            