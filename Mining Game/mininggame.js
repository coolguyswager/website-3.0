
var upgrade1 = false;
var upgrade2 = false;
var upgrade3 = false;
var money = 0;

function Resource(sellValue, chance, quantity) {
    this.sellValue = sellValue;
    this.chance = chance;
    this.quantity = quantity;
}
var iron = new Resource(5,0.7,0);
var gold = new Resource(10,0.3,0);
var ruby = new Resource(30,0.06,0);
var diamond = new Resource(40,0.05,0);

var oil = {
  quantity: 0
};

//The iron and gold stuff//
update();
//rock swag//
var rock= document.getElementById("rock"); rock.addEventListener("click", rockClick,false); 
//end rock swag :c//

//adding stuff//
function rockClick() {
        if (Math.random() <= iron.chance){
          iron.quantity += 1; 
        }
        if (Math.random() <= gold.chance ){
          gold.quantity += 1; 
        }
        if (Math.random() <= diamond.chance ) {
          diamond.quantity += 1; 
        }
         if (Math.random() <= ruby.chance ) {
          ruby.quantity += 1;
        }
  update();
  //end adding stuff//
}
//end of iron and gold//


//sell all button//

document.getElementById("moneyDisplay").innerHTML = "Money: "+money;

var sellAll= document.getElementById("sellall");
sellall.addEventListener("click", cashOut,false);
function cashOut(){
  var ironValue=iron.quantity*iron.sellValue;
  var goldValue=gold.quantity*gold.sellValue;
  var diamondValue=diamond.quantity*diamond.sellValue;
  var rubyValue=ruby.quantity*ruby.sellValue;
  var worth=ironValue+goldValue+diamondValue+rubyValue;
  
  
  money+=worth;
  iron.quantity=0;
  gold.quantity=0;
  diamond.quantity=0;
  ruby.quantity=0;
  update();
}
function update(){
document.getElementById("moneyDisplay").innerHTML = "Money: "+money;
document.getElementById("ironCount").innerHTML = "Iron: "+iron.quantity;
document.getElementById("goldCount").innerHTML = "Gold: "+gold.quantity;
document.getElementById("diamondCount").innerHTML = "Diamond: "+diamond.quantity;
 document.getElementById("rubyCount").innerHTML = "Ruby: "+ruby.quantity;
  document.getElementById("oilCount").innerHTML = "Oil: "+oil.quantity;
//This doesnt work because it isnt refering to the image. It is refering to the lack of money text. Duh//
  if (upgrade1 === true){
    document.getElementById("upgrade1").style.display="none";
  }
  if (upgrade2 === true){
    document.getElementById("upgrade2").style.display="none";
  }
  if (upgrade3 === true){
    document.getElementById("upgrade3").style.display="none";
  }
}

//end sell all//

//upgrade//


var upgrade= document.getElementById("upgradeimg"); 
upgrade.addEventListener("click", upgradeGot,false); 


function upgradeGot(){
  
      if (money >= 1000 && upgrade1 === false){
          money-=1000;
          diamond.chance = 0.1;
          update();
          upgrade1 = true;
          console.log(upgrade1);
      } 
      else if(money <= 1000 && upgrade1 === false){
           document.getElementById("lackOfMoney").style.display="block";
           setTimeout(function()         {document.getElementById("lackOfMoney").style.display="none";},3000);    
      }
  update();

}


//end upgrade//

//upgrade 2//

document.getElementById("upgrade2img"); 
upgrade2img.addEventListener("click", upgrade2Got,false);

function upgrade2Got(){
    //when you have money//
    if(money >= 1500 && upgrade2 ===   false){
    money-=1500;
    upgrade2 = true;
    update();
    }
  //you dont have enough money thing//
    else if(money <= 1500 && upgrade2 === false){
           document.getElementById("lackOfMoney").style.display="block";
           setTimeout(function()         {document.getElementById("lackOfMoney").style.display="none";},3000); 
      }
  if(upgrade2 === true){
      rockClick();
     setTimeout(function()   {window.requestAnimationFrame(upgrade2Got);},500);  
    }
}

//end upgrade 2//

//Oil//
document.getElementById("upgrade3img"); 
upgrade3img.addEventListener("click", upgrade3Got,false);

function upgrade3Got (){
    if(money >= 200 && upgrade3 === false){
      money-=200;
      upgrade3 = true;
      update();
    }
    else if(money <= 200 && upgrade3 === false){
      document.getElementById("lackOfMoney").style.display="block";
      setTimeout(function(){ 
        document.getElementById("lackOfMoney").style.display="none";},3000); 
    }
    if(upgrade3 === true){
      oil.quantity += 1;
      setTimeout(function(){
        window.requestAnimationFrame(upgrade3Got); update();
      },3000);  
    }
}
//End Oil//

//Brewing system//
var furnDrop = document.getElementById("furnacedropdown");

var itemToSmelt = furnDrop.value;

var smeltingbutton = document.getElementById("smeltingbutton");

furnDrop.addEventListener("change",  checkItemToSmelt);
function checkItemToSmelt(){
  itemToSmelt = furnDrop.value;
  if(itemToSmelt === "iron"){
    itemToSmelt = iron;
  }
  if (itemToSmelt === "copper"){
    itemToSmelt = copper;
  }
    if (itemToSmelt === "nickel"){
    itemToSmelt = nickel;
  }
    if (itemToSmelt === "gold"){
    itemToSmelt = gold;
  }
}
var howMuchToSmelt;
function smelt(){
  howMuchToSmelt = parseInt(document.getElementById("furncountselect").value);
}
smeltingbutton.addEventListener("click", smelting);
function smelting(){
  if (howMuchToSmelt <=itemToSmelt.quantity){
  itemToSmelt.quantity -= howMuchToSmelt;
  update();
    switch(itemToSmelt){
      case "iron":
        ironIngot.quantity += howMuchToSmelt;
        break;
      case "copper":
        copperIngot.quantity += howMuchToSmelt;
        break;
      case "nickel":
        nickelIngot.quantity += howMuchToSmelt;
        break;
      case "gold":
        goldIngot.quantity += howMuchToSmelt;
        break;
    }
 
}
  else{
    document.getElementById("lackOfMoney").style.display="block";
           setTimeout(function()         {document.getElementById("lackOfMoney").style.display="none";},3000);
  }
  }
//end Brewing system//

//page 2//

function changeImage(){
  document.getElementById("page1Visual").style.display = "none";
  document.getElementById("page2visual").style.display = "inline";
}
//What happens if you click on the mine//
var mineSpans = document.querySelectorAll("span.theMines");

for(var i = 0; i < mineSpans.length; i++){
  mineSpans[i].addEventListener("click", goToMines, false);
}
function goToMines(){
document.getElementById("page1Visual").style.display = "inline";
  document.getElementById("page2visual").style.display = "none";
}

//What happens if you click on the Trade outpost//
var tradeSpans = document.querySelectorAll("span.tradingPost");

for(var i = 0; i < tradeSpans.length; i++){
  tradeSpans[i].addEventListener("click", goToTradingPost, false);
}
function goToTradingPost(){
  
    document.getElementById("page2visual").style.display = "none";
    document.getElementById("pageTradeVisual").style.display = "inline";
 
}


//What happens if you click on the rocket//
var rocketSpans = document.querySelectorAll("span.rocket");

for(var i = 0; i < rocketSpans.length; i++){
  rocketSpans[i].addEventListener("click", goToRocket, false);
}

function goToRocket(){
alert("Blast off");
  
}
//page trading post//

var betSpans = document.querySelectorAll("span.betCSGO");

for(var i = 0; i < betSpans.length; i++){
  betSpans[i].addEventListener("click", loseMoney, false);
}
  function loseMoney(){
    alert("RIP Skins");
  }
document.getElementById("moneyDisplayTrade").innerHTML = "Money: "+money;

//BACK BUTTON//
var goBackSpans = document.querySelectorAll("span.goBack");

for(var i = 0; i < goBackSpans.length; i++){
  goBackSpans[i].addEventListener("click", goBack, false);
}
function goBack(){
  document.getElementById("pageTradeVisual").style.display = "none";
  document.getElementById("page2visual").style.display = "inline";
}
//end trading post//

//end page 2//





