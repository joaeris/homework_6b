var cart = null;
var Item = function (name, fill, color, amount) {
    this.name = name
    this.fill = fill
    this.color = color
    this.amount = amount
};



// add an item to the cart
function addItemToCart(name, fill, color, amount) {
    //retrieve form localstorage

    let cart = JSON.parse(localstorage.getItem('savedCart'));


    if (cart === null) {
        var item = new Item(name, fill, color, amount);
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
function removeItemFromCart(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count--;
            if (cart[i].count === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
}

// remove the whole item from the cart
function removeItemFromCartWhole(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
}

//clearing the entire cart to start over
function clearCartAll() {
    cart = [];
}

clearCartAll();
console.log(cart)


//this will find the subtotal
function subtotal() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].amount;
    }
    return subtotal;
}

console.log(subtotal());