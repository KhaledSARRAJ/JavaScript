  //Dégradé linéaire:
            var canvas1 = document.querySelector('#canvas1');
            var ctx1 = canvas1.getContext('2d');
            var X = canvas1.width;
            var Y = canvas1.height;
            var degrade1 = ctx1.createLinearGradient(0, 0, 0, Y); //axe du dégradé
            degrade1.addColorStop(0, "red");
            degrade1.addColorStop(0.9, "black");
            //Je défini le dégradé comme style du contexte:
            ctx1.fillStyle = degrade1;
            //Je trace un rectangle sur la zone de mon dégradé:
            ctx1.fillRect(0, 0, X/2, Y);
            
            var degrade2 = ctx1.createLinearGradient(X/2, Y, X, 0); //axe montant
            degrade2.addColorStop(0, "pink");
            degrade2.addColorStop(0.5, "hotpink");
            degrade2.addColorStop(1, "purple");
            ctx1.fillStyle = degrade2;
            ctx1.fillRect(X/2, 0, X/2, Y);
            
            //Dégradé radial:
            
            var canvas2 = document.querySelector('#canvas2');
            var ctx2 = canvas2.getContext('2d');
            var degRadial = ctx2.createRadialGradient(X/4, Y/2, 0, X/4, Y/2, X/3);
            degRadial.addColorStop(0, 'purple');
            degRadial.addColorStop(0.5, 'pink');
            degRadial.addColorStop(1, 'white');
            ctx2.fillStyle = degRadial;
            ctx2.arc(X/4, Y/2, X/4, 0, Math.PI * 2);
            ctx2.fill();
            
            
            
            
            
            
            
            
            
            
            
            