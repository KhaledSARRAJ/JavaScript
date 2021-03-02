//Copie par valeur et reference 

//Les primitifs sont copies par vvaler

var x = 5;
 var y = x;
 y = 8;
 console.log(x);
 console.log(y);

 //Les objets sont copies par reference
 var obj = {name:"toto"};
 var obj2 = obj;
 obj2.name="titi"
 console.log(obj.name);
 console.log(obj2.name)