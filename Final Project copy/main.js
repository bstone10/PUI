



var choices = {
    flavor: null,
    style: null,
    feel: null,
}

var flavorSelect = false;
var styleSelect = false;
var feelSelect = false;

var flavor = ['Sour', 'Fruity', 'Neutral', 'Sweet']
var style = ['Fizzy', 'Flat', 'Hot', 'Frozen']
var feel = ['Refreshing', 'Classic', 'Modern']

var ingredients = {

    // FLAVOR
    Sour: ["Sours", "Lemon juice", "Lime juice"],
    Fruity: ["Mango juice", "Pineapple juice", "Grapefruit juice", "Peach juice", "Coconut", "Orange juice", "Cranberry Juice", "Lemonade", "Apple juice"],
    Neutral: ["Mint leaves", "Coffee liquer", "Bitters", "Cream", "Ginger", "Cinammon sticks"],
    Sweet: ["Triple Sec", "Simple syrup",  "Honey", "Agave nectar", "Grenadine"],

    // STYLE
    Fizzy: ["Club soda", "Coke", "Ginger ale", "Ginger beer", "Tonic water", "Sprite"],
    Flat: [],
    Hot: ["Apple cider", "Steamed milk", "Black tea", "Earl grey tea", "Peppermint tea", "Hot chocolate", "Coffee"],
    Frozen: ["Ice cubes"],

    // FEEL
    Refreshing: ["White rum", "Tequila", "Gin", "Mezcal", "Vermouth", ],
    Classic: ["Dark rum", "Whiskey", "Tequila", "Amaretto", "Bourbon", "Vermouth", "Brandy", "Cognac"],
    Modern: ["Gin", "Vodka", "Tequila", "White rum"]
}

function verifyAge() {
    var age = document.getElementById('age').value;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    var ofAgeYear = parseInt(yyyy, 10)-21;
    var ofAgeDate = ofAgeYear.toString() + '-' + mm + '-' + dd;

    if (new Date(age) > new Date(ofAgeDate)) {
        document.getElementById("error").innerHTML = "You must be at least 21 years old to access this site.";
    }
    else {
        $("#myModal").modal("hide");

    }
    

}

function flavorProfile(value) {
    if (flavor.includes(value)) {
        choices.flavor = value;
        flavorSelect = true;
    }

    else if (style.includes(value)) {
        choices.style = value;
        styleSelect = true;
    }

    else if (feel.includes(value)) {
        choices.feel = value;
        feelSelect = true;
    }
}


function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

function randomDrink() {
    choices.flavor = flavor[Math.floor(Math.random()*flavor.length)];
    choices.style = style[Math.floor(Math.random()*style.length)];
    choices.feel = feel[Math.floor(Math.random()*feel.length)];
    localStorage.setItem("myChoices", JSON.stringify(choices))
}

DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            flavorProfile(obj.val);
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
            if (flavorSelect && styleSelect && feelSelect===true) {
                document.getElementById('createButton').className = "";
                localStorage.setItem("myChoices", JSON.stringify(choices))
            }

        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}

$(function() {

    var dd = new DropDown( $('#dd') );

    $(document).click(function() {

        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });

});


$(function() {

    var dd = new DropDown( $('#de') );

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });

});

$(function() {

    var dd = new DropDown( $('#df') );

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });

});


function clearItems() {
    localStorage.setItem("myChoices", JSON.stringify(new Object()));
}

function myChoices() {
    choices = JSON.parse(localStorage.getItem("myChoices"))
    document.getElementById("flavorContent").innerHTML = 
        "Now try making your "+choices.flavor.toLowerCase()+", "+
        choices.style.toLowerCase()+", and "+
        choices.feel.toLowerCase()+" cocktail.";

    if (choices.style === "Flat") {
        var1 = [ingredients[choices.flavor][Math.floor(Math.random() * ingredients[choices.flavor].length)],
                ingredients[choices.feel][Math.floor(Math.random() * ingredients[choices.feel].length)]
                ];

        var2 = [ingredients[choices.flavor][Math.floor(Math.random() * ingredients[choices.flavor].length)],
                ingredients[choices.feel][Math.floor(Math.random() * ingredients[choices.feel].length)]
                ];

        var3 = [ingredients[choices.flavor][Math.floor(Math.random() * ingredients[choices.flavor].length)],
                ingredients[choices.feel][Math.floor(Math.random() * ingredients[choices.feel].length)]
                ];

        document.getElementById("variation1.1").innerHTML = "- "+var1[0];
        document.getElementById("variation1.2").innerHTML = "- "+var1[1];

        document.getElementById("variation2.1").innerHTML = "- "+var2[0];
        document.getElementById("variation2.2").innerHTML = "- "+var2[1];

        document.getElementById("variation3.1").innerHTML = "- "+var3[0];
        document.getElementById("variation3.2").innerHTML = "- "+var3[1];

    }

    else {
        var1 = [ingredients[choices.flavor][Math.floor(Math.random() * ingredients[choices.flavor].length)],
                ingredients[choices.style][Math.floor(Math.random() * ingredients[choices.style].length)],
                ingredients[choices.feel][Math.floor(Math.random() * ingredients[choices.feel].length)]
                ];

        var2 = [ingredients[choices.flavor][Math.floor(Math.random() * ingredients[choices.flavor].length)],
                ingredients[choices.style][Math.floor(Math.random() * ingredients[choices.style].length)],
                ingredients[choices.feel][Math.floor(Math.random() * ingredients[choices.feel].length)]
                ];

        var3 = [ingredients[choices.flavor][Math.floor(Math.random() * ingredients[choices.flavor].length)],
                ingredients[choices.style][Math.floor(Math.random() * ingredients[choices.style].length)],
                ingredients[choices.feel][Math.floor(Math.random() * ingredients[choices.feel].length)]
                ];

        document.getElementById("variation1.1").innerHTML = "- "+var1[0];
        document.getElementById("variation1.2").innerHTML = "- "+var1[1];
        document.getElementById("variation1.3").innerHTML = "- "+var1[2];

        document.getElementById("variation2.1").innerHTML = "- "+var2[0];
        document.getElementById("variation2.2").innerHTML = "- "+var2[1];
        document.getElementById("variation2.3").innerHTML = "- "+var2[2];

        document.getElementById("variation3.1").innerHTML = "- "+var3[0];
        document.getElementById("variation3.2").innerHTML = "- "+var3[1];
        document.getElementById("variation3.3").innerHTML = "- "+var3[2];
    }
}













