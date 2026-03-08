function getCart(){

return JSON.parse(localStorage.getItem("cart")) || [];

}

// Save cart

function saveCart(cart){

localStorage.setItem("cart", JSON.stringify(cart));

}


// Add product

function addToCart(id){

let cart = getCart();

cart.push(id);

saveCart(cart);

alert("Product added to cart");

}


// Display cart items

function displayCart(){

const list = document.getElementById("cartItems");

if(!list) return;

const cart = getCart();

list.innerHTML = "";

cart.forEach((item,index)=>{

list.innerHTML += `

<li>

Product ID: ${item}

<button onclick="removeItem(${index})">Remove</button>

</li>

`;

});

}


// Remove item

function removeItem(index){

let cart = getCart();

cart.splice(index,1);

saveCart(cart);

displayCart();

}


displayCart();