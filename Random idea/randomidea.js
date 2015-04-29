
function GetValue()
{
    var myarray= new Array("Do a project on Hitlers","Do a project on Stalins","Do a project on Mussolinis");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
   
   var myarray2= new Array(" Rise to"," lose of");
    var random2 = myarray2[Math.floor(Math.random() * myarray2.length)];
   document.getElementById("message2").innerHTML=random2;
   
   var myarray3= new Array("Power","Popularity");
    var random3 = myarray3[Math.floor(Math.random() * myarray3.length)];
   document.getElementById("message3").innerHTML=random3;
}


