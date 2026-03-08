const products = [

{ id:1, name:"Headphones", price:99, image:"https://picsum.photos/300?1" },
{ id:2, name:"Keyboard", price:79, image:"https://picsum.photos/300?2" },
{ id:3, name:"Mouse", price:49, image:"https://picsum.photos/300?3" },
{ id:4, name:"Monitor", price:199, image:"https://picsum.photos/300?4" },
{ id:5, name:"Laptop Stand", price:39, image:"https://picsum.photos/300?5" },
{ id:6, name:"USB Hub", price:25, image:"https://picsum.photos/300?6" },
{ id:7, name:"Webcam", price:89, image:"https://picsum.photos/300?7" },
{ id:8, name:"Speaker", price:120, image:"https://picsum.photos/300?8" }

];

const grid = document.getElementById("productGrid");

// Generate product cards
if(grid){

products.forEach(product => {

grid.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<button onclick="addToCart(${product.id})">Add to Cart</button>

<br><br>

<a href="product.html?id=${product.id}">View Product</a>

</div>

`;

});

}


// Product detail page

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const detail = document.getElementById("productDetail");

if(detail){

const product = products.find(p => p.id == id);

detail.innerHTML = `

<h2>${product.name}</h2>

<img src="${product.image}" width="300">

<p>Price: $${product.price}</p>

<button onclick="addToCart(${product.id})">Add to Cart</button>

`;

}