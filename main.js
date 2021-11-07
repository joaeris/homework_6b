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


var cart = null;
var Item = function (name, fill, color, count) {
  this.name = name
  this.fill = fill
  this.color = color
  this.count = count
};


// add an item to the cart

function addItemToCart(name, fill, color, count) {
  //retrieve form localstorage
  // let cart = JSON.parse(localstorage.getItem('savedCart'));


  if (cart === null) {
    var item = new Item(name, fill, color);
    cart = [item]
  }

  var alreadyInCart = false;

  for (var i in cart) {
    if (cart[i].name === name && cart[i].color === color && cart[i].fill === fill) {
      cart[i].count += count;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    var item = new Item(name, fill, color, count);
    cart.push(item)
  }


  // updating localstorage
  // localstorage.setItem('savedCart', JSON.stringify(cart));

}

// remove an item from the cart
function re