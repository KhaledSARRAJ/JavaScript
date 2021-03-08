//Insertion d'une image dans un canvas:
            var canvas1 = document.querySelector('#canvas1');
            var ctx1 = canvas1.getContext('2d');
            var X = canvas1.width;
            var Y = canvas1.height;
            var cote = X/4;
            var delta = X/4;
            for(i=1; i < 5 ; i++){
                ctx1.strokeStyle = "red";
                ctx1.strokeRect(0,0, cote, cote);
                ctx1.translate(delta, delta);
            }
          
            //Changement d'échelle:
            
            var canvas2 = document.querySelector('#canvas2');
            var ctx2 = canvas2.getContext('2d');
            
            ctx2.fillStyle = "blue";
            ctx2.fillRect(0, 0, 100,100);
            //On sauvagarde l'état du canvas
            ctx2.save();
            //On change d'échelle:
            ctx2.scale(2,2);
            ctx2.fillStyle = "green";
            //Le carré dessiné est donc deux fois plus gros
            ctx2.fillRect(100,100, 100, 100);
            //On restaure l'échelle initiale du canvas
            ctx2.restore();       
            ctx2.fillStyle = 'yellow';
            ctx2.fillRect(100, 100, 50, 50);
            
            
            //Rotation
            
            var canvas3 = document.querySelector('#canvas3');
            var ctx3 = canvas3.getContext('2d');
            ctx3.fillStyle = "blue";
            ctx3.fillRect(0,0,100,100);
            //On sauvegarde le contexte:
            ctx3.save();
            //On programme une rotation de 45 degré:
            ctx3.rotate(Math.PI/180 * 45);
            ctx3.fillStyle = "hotpink";
            ctx3.fillRect(200,0, 100, 100);
            ctx3.restore();
            ctx3.fillStyle = "orange";
            ctx3.fillRect(300,100,100,100);    