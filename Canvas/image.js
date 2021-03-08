//Insertion d'une image dans un canvas:
            var canvas1 = document.querySelector('#canvas1');
            var ctx1 = canvas1.getContext('2d');
            var X = canvas1.width;
            var Y = canvas1.height;
            var image = new Image; //On instancie une image
            image.src = 'chanard.jpg';
            image.onload = function(){
                ctx1.drawImage(image, 0, 0, X/2, Y/2);
                ctx1.drawImage(image, X/2, Y/2, X/2, Y/2);
            }
            
            //Création d'un motif à partir d'une image:
            
            var canvas2 = document.querySelector("#canvas2");
            var ctx2 = canvas2.getContext('2d');
            var motif = new Image;
            motif.src = 'homer.png';
            motif.onload = function(){
                //On créé un pattern de répétition d'image:
                ctx2.fillStyle = ctx2.createPattern(motif, 'repeat');
                //On dessine un rectangle stylisé par le pattern de répétition d'image:
                ctx2.fillRect(0, 0, X, Y);
            }
            
            //Texte dans un canvas:
            
            var canvas3 = document.querySelector('#canvas3');
            var ctx3 = canvas3.getContext('2d');
            ctx3.textAlign = 'center'; //Centrage horizontal
            ctx3.textBaseline = 'middle';//Centrage vertical
            //Ajout des ombrages:
            ctx3.shadowColor = "grey";
            ctx3.shadowOffsetX = 10;
            ctx3.shadowOffsetY = 10;
            ctx3.fillStyle = "hotpink";
            ctx3.strokeStyle = "blue";
            ctx3.shadowBlur = 10;
            //Definition de la font:
            ctx3.font = "bold italic 80px arial";
            ctx3.fillText('Hello', X/2, Y/3);
            ctx3.strokeText('AFCEPF', X/2, Y/3 * 2);