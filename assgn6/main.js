


//GLOBAL VARIABLES to track cart amounts, and whether 
//the user has sucessfully selected size and color
var cartAmt = 1;
var basketAmt = 0;
var sizeSelected = false;
var colorSelected = false;
var itemAdded = {};



//Updates the cart field to show the amount added
function cart() {
    itemAdded = JSON.parse(localStorage.getItem("myItem"));
    if (itemAdded.quantity === undefined) {
        document.getElementById("cartHead").innerHTML = "CART: "+ 0;
    }
    else {
        document.getElementById("cartHead").innerHTML = "CART: "+ itemAdded.quantity;
    }
    if (window.location.pathname == "/Users/stone/OneDrive/Documents/School/F19/PUI/HW6/cart.html") {
        shoppingCart();
    }
}

function cartNum() {
    document.getElementById('number').innerHTML = cartAmt;
}

function clearItems() {
    localStorage.setItem("myItem", JSON.stringify(new Object()));
}

function test() {
    confirm("This works!")
}

function removeItems() {
    clearItems();
    window.location.reload(false); 
}

function shoppingCart() {
    if (itemAdded.quantity === undefined) {
        cartPage = document.getElementById('cartItem');
        cartPage.innerHTML = "Your cart is empty";
    }   
    else {
        var title = itemAdded.title;
        var size = itemAdded.size;
        var color = itemAdded.color;
        var quantity = itemAdded.quantity;
        document.getElementById('itemTitle').innerHTML = title;
        document.getElementById('itemSize').innerHTML = "Size: "+size;
        document.getElementById('itemColor').innerHTML = "Color: "+color;
        document.getElementById('itemQuantity').innerHTML = "Quantity: "+quantity;
        var x = document.createElement("IMG");
        x.setAttribute("src", "assets/dogharness.png");
        x.setAttribute("height", 200);
        document.getElementById('productImage').appendChild(x);
        document.getElementById('itemPrice').innerHTML = "Total price: $"+quantity*80

    }
}

//Adds the selecred quantity to the cart
function addCart() {
    if (sizeSelected && colorSelected) {
        basketAmt += cartAmt;
        itemAdded.quantity = cartAmt;
        product = document.getElementById("productTitle").innerHTML;
        itemAdded.title = product;
        localStorage.setItem("myItem", JSON.stringify(itemAdded));
        cart();
        if (cartAmt === 1) {
            confirm(cartAmt + " " + product +" successfully added to cart!");
        }
        else {
            confirm(cartAmt + " " + product +"es successfully added to cart!");
        }

    }
}

//Selects size, and checks to make sure it's the only size selected
function sizeSelectTiny() {
    if (sizeSelected === false) {
        document.getElementById("sizeTiny").className += " active";
        sizeSelected = true;
        itemAdded.size = "Tiny";
        if (sizeSelected && colorSelected) {
            document.getElementById("cart").className = "";
        }
    }
    else {
        choice = document.getElementsByClassName("sizeChoice active");
        choice[0].className = "sizeChoice";
        sizeSelected = false;
        sizeSelectTiny();
    }
}

function sizeSelectSmall() {
    if (sizeSelected === false) {
        document.getElementById("sizeSmall").className += " active";
        sizeSelected = true;
        itemAdded.size = "Small";
        if (sizeSelected && colorSelected) {
            document.getElementById("cart").className = "";
        }
    }
    else {
        choice = document.getElementsByClassName("sizeChoice active");
        choice[0].className = "sizeChoice";
        sizeSelected = false;
        sizeSelectSmall();
    }
}

function sizeSelectMedium() {
    if (sizeSelected === false) {
        document.getElementById("sizeMedium").className += " active";
        sizeSelected = true;
        itemAdded.size = "Medium";
        if (sizeSelected && colorSelected) {
            document.getElementById("cart").className = "";
        }
    }
    else {
        choice = document.getElementsByClassName("sizeChoice active");
        choice[0].className = "sizeChoice";
        sizeSelected = false;
        sizeSelectMedium();
    }
}

function sizeSelectLarge() {
    if (sizeSelected === false) {
        document.getElementById("sizeLarge").className += " active";
        sizeSelected = true;
        itemAdded.size = "Large";
        if (sizeSelected && colorSelected) {
            document.getElementById("cart").className = "";
        }
    }
    else {
        choice = document.getElementsByClassName("sizeChoice active");
        choice[0].className = "sizeChoice";
        sizeSelected = false;
        sizeSelectLarge();
    }
}

//Selects color, and checks to make sure it's the only color selected
function colorSelectPink() {
    if (colorSelected === false) {
        document.getElementById("colorPink").style.border = "3px solid black";
        colorSelected = true;
        itemAdded.color = "Pink";
        if (sizeSelected && colorSelected) {
            document.getElementById("cart").className = "";
        }
    }
    else {
        colors = document.getElementsByClassName("colorButton");
        for (i = 0; i < colors.length; i++) {
            colors[i].style.border = "0px";
        }
        colorSelected = false;
        colorSelectPink();
    }
}

function colorSelectPurple() {
    if (colorSelected === false) {
        document.getElementById("colorPurple").style.border = "3px solid black";
        colorSelected = true;
        itemAdded.color = "Purple";
        if (sizeSelected && colorSelected) {
            document.getElementById("cart").className = "";
        }
    }
    else {
        colors = document.getElementsByClassName("colorButton");
        for (i = 0; i < colors.length; i++) {
            colors[i].style.border = "0px";
        }
        colorSelected = false;
        colorSelectPurple();
    }
}

function colorSelectGreen() {
    if (colorSelected === false) {
        document.getElementById("colorGreen").style.border = "3px solid black";
        colorSelected = true;
        itemAdded.color = "Green";
        if (sizeSelected && colorSelected) {
            document.getElementById("cart").className = "";
        }
    }
    else {
        colors = document.getElementsByClassName("colorButton");
        for (i = 0; i < colors.length; i++) {
            colors[i].style.border = "0px";
        }
        colorSelected = false;
        colorSelectGreen();
    }
}

function colorSelectOrange() {
    if (colorSelected === false) {
        document.getElementById("colorOrange").style.border = "3px solid black";
        colorSelected = true;
        itemAdded.color = "Orange";
        if (sizeSelected && colorSelected) {
            document.getElementById("cart").className = "";
        }
    }
    else {
        colors = document.getElementsByClassName("colorButton");
        for (i = 0; i < colors.length; i++) {
            colors[i].style.border = "0px";
        }
        colorSelected = false;
        colorSelectOrange();
    }
}

//Adds or subtracts quantity of items
function minus() {
    if (cartAmt !== 1) {
        if (cartAmt !== 2){
            cartAmt -= 1;
            cartNum();
        }
        else {
            cartAmt -= 1;
            cartNum();
            document.getElementById("minusButton").className = "add disabled";
        }
    }
}

function add() {
    if (cartAmt === 1){
        document.getElementById("minusButton").className = "add";
        cartAmt += 1;
        cartNum();
    }
    else {
        cartAmt += 1;
        cartNum();
    }
}

