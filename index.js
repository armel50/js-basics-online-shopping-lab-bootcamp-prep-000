var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price1 = Math.floor(Math.random()*100)+1;
 
 cart.push({["itemName"]:item,["itemPrice"]:price1});

 return `${item} has been added to your cart.`;
}
 
function viewCart() {
// var string;
// if(cart.length===0){
//     return "Your shopping cart is empty.";
// }else{ 
//     var next = "";
   
//   for(var i = 0;i<cart.length;i++){
     
//     if(cart.length ===1){
//       return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`
//     }
//   else if(i===cart.length -2){
//       next =`, and ${cart[i+1].itemName} at $${cart[i+1].itemPrice}.`
     
//       return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}${next}`;
     
   
//     }else{
//       next =`, ${cart[i+1].itemName} at $${cart[i+1].itemPrice} `;
//         return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}${next}`;
//     }
  
     
//   }
   
   
     console.log("this is the view cart========");
  console.log(cart);
 
 if(cart.length===0){
    console.log( "Your shopping cart is empty.");
 }else{ 
    var string = `In your cart, you have `;
    var next=``;
   for(var i = 0;i<cart.length;i++){
     
     if(cart.length ===1){
       
       console.log(`In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      
     }
   else{
      if(i===cart.length - 2){
        next = `, and ${cart[i+1].itemName } at $${cart[i+1].itemPrice}`;
        string+= `${cart[i].itemName} at $${cart[i].itemPrice}${next}.`;
        break;
      }
      if(i<cart.length -2){
        next= `, `;
        string+=`${cart[i].itemName} at $${cart[i].itemPrice}${next}`;
      }
      //string+=`${cart[i].itemName} at $${cart[i].itemPrice}${next}`;

    }
    
    
  
     
   }
   
   console.log(string);
   
  
 }
  
}

function total() {
  // write your code here
  var total=0;
  for(var i =0;i<cart.length;i++){
    if(!isNaN(cart[i].itemPrice)){
      total+=cart[i].itemPrice;
    }
    
  }
  
  
  return total;
}

var found=false;
function removeFromCart(item) {
  // write your code here
   for(var i= 0;i< cart.length; i++){
     if(cart[i].itemName ===item){
       cart.splice(i,1);
       found=true;
       return cart;
       
     }
     
     
     if(found ===false && i===cart.length -1 ){
       return "That item is not in your cart.";
     }
   }
}


function placeOrder(cardNumber) {
  // write your code here
  if(arguments.length===0 || isNaN(cardNumber)){
    return("Sorry, we don\'t have a credit card on file for you.");
  }else{
   
    var it =total();
     cart.length = 0;
    return `Your total cost is $${it}, which will be charged to the card ${cardNumber}.`;
  }
  
}
