function rainy() {
  document.getElementById('orderHere').innerHTML = "Rainy Day";
}

function morningHaze() {
  document.getElementById('orderHere').innerHTML = "Morning Haze";
}

function afterSpecial() {
  document.getElementById('orderHere').innerHTML = "After School Special";
}

function denim() {
  document.getElementById('orderHere').innerHTML = "Denim";
}

function submit() {
  var select = document.getElementById("quantity")
  var quantity = select.numbers
}

var addToCart = document.getElementById('submitButton')
for (var i = 0; i < addToCart.length, i++) {
  var button = addToCart[i]
  button.addeventlistener('click', addToCartClick)
}

function addToCartClick(event) {
  var button = event.target
  var item = button.parentElement.parentElement
  var name = item.getElementbyClassName('name')[0].innerText
  var fill = item.getElementbyClassName('fill')[0].innerText
  var price = item.getElementbyClassName('amount')[0].innerText
  var imgSrc = item.getElementbyClassName('roundpillow')[0].src
  itemsInCart(name, fill, price, imgSrc)
}

function addItemToCart(name, fill, price, imgSrc) {
  var newCart = document.createElement('div')
  var cartItems = document.getElementsByClassName('shipping')[0]
  cartItems.append(newCart)
}


//quantity = ""
//document.getElementById("submit").addEventListener("click", function ()) {
//document.getElementById("quantity").innerHTML = "";
//}