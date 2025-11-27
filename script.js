# script.js
```javascript
function addToCart(name, price) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({ name, price });
localStorage.setItem('cart', JSON.stringify(cart));
alert('Added to cart');
}


function loadCart() {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let list = document.getElementById('cartList');
let total = 0;


list.innerHTML = '';
cart.forEach(item => {
let li = document.createElement('li');
li.textContent = item.name + ' - ₹' + item.price;
list.appendChild(li);
total += item.price;
});


document.getElementById('totalAmount').textContent = 'Total: ₹' + total;
}
