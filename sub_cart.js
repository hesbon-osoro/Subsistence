"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Hesbon Osoro
   Date: 12/10/22  

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.addEventListener("load", setupCart);

function setupCart() {
  var addButtons = document.getElementsByClassName("addButton");
  for (var i = 0; i < addButtons.length; i++) {
    addButtons[i].onclick = addItem;
  }
}

function addItem(e) {
  var foodItem = e.target.nextElementSibling;
  var foodID = foodItem.id;
  var foodDescription = foodItem.cloneNode(true);
  var cartBox = document.getElementById("cart");
  var duplicateOrder = false;
  for (
    var n = cartBox.firstElementChild;
    n !== null;
    n = n.nextElementSibling
  ) {
    if (n.id === foodID) {
      n.firstElementChild.textContent++;
      duplicateOrder = true;
    }
  }
  if (duplicateOrder === false) {
    var orderCount = document.createElement("span");
    orderCount.textContent = 1;
    foodDescription.insertBefore(orderCount, foodDescription.firstChild);
    cartBox.appendChild(foodDescription);
  }
}
