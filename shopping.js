var fruit = [{
        name: "Mango",
        price: 50,
        category: "Fruit"
    },
    {
        name: "Banana",
        price: 60,
        category: "Fruit"
    },
    {
        frtname: "Papaya",
        price: 70,
        category: "Fruit"
    },
    {
        name: "Orange",
        price: 80,
        category: "Fruit"
    },
    {
        name: "Apple",
        price: 90,
        category: "Fruit"
    },
    {
        name: "Strawberry",
        price: 130,
        category: "Fruit"
    },
    {
        name: "Bilberry",
        price: 150,
        category: "Fruit"
    },
    {
        name: "Blackberry",
        price: 160,
        category: "Fruit"
    },
    {
        name: "Apricot",
        price: 130,
        category: "Fruit"
    },
    {
        name: "Grape",
        price: 135,
        category: "Fruit"
    }
];
var vegetables = [{
        name: "Carrot",
        price: 70,
        category: "Vegetables"
    },
    {
        name: "Cauliflower",
        price: 80,
        category: "Vegetables"
    },
    {
        name: "Eggplant",
        price: 90,
        category: "Vegetables"
    },
    {
        name: "Mushrooms",
        price: 50,
        category: "Vegetables"
    },
    {
        name: "Onion",
        price: 100,
        category: "Vegetables"
    },
    {
        name: "Potato",
        price: 70,
        category: "Vegetables"
    },
    {
        name: "Pumpkin",
        price: 90,
        category: "Vegetables"
    },
    {
        name: "Tomato",
        price: 50,
        category: "Vegetables"
    },
    {
        name: "Cabbage",
        price: 36,
        category: "Vegetables"
    },
    {
        name: "Lettuce",
        price: 74,
        category: "Vegetables"
    }
];
var pulses = [{
        name: "Green-Gram",
        price: 74,
        category: "Pulses"
    },
    {
        name: "Lentil",
        price: 73,
        category: "Pulses"
    },
    {
        name: "Pigeon-pea",
        price: 84,
        category: "Pulses"
    },
    {
        name: "Black-gram",
        price: 76,
        category: "Pulses"
    },
    {
        name: "Chickpeas",
        price: 86,
        category: "Pulses"
    },
    {
        name: "Cowpea",
        price: 76,
        category: "Pulses"
    },
    {
        name: "Sago",
        price: 56,
        category: "Pulses"
    },
    {
        name: "Kidney-Beans",
        price: 56,
        category: "Pulses"
    },
    {
        name: "Moth-dal",
        price: 46,
        category: "Pulses"
    },
    {
        name: "Yellow-peas",
        price: 86,
        category: "Pulses"
    },
];
var dairy = [{
        name: "Butter ",
        price: 100,
        category: "dairy"
    },
    {
        name: "Cheese",
        price: 130,
        category: "dairy"
    },
    {
        name: "Cream",
        price: 140,
        category: "dairy"
    },
    {
        name: "Milk",
        price: 90,
        category: "dairy"
    },
    {
        name: "Milk Powder.",
        price: 70,
        category: "dairy"
    },
    {
        name: "Toned milk",
        price: 70,
        category: "dairy"
    },
    {
        name: "Dahi",
        price: 80,
        category: "dairy"
    },
    {
        name: "Lassi",
        price: 50,
        category: "dairy"
    },
    {
        name: "Shake",
        price: 40,
        category: "dairy"
    },
    {
        name: "Vanila",
        price: 70,
        category: "dairy"
    }
];
var cat = [fruit, vegetables, pulses, dairy];
console.log(cat);
cart = [];
var save = [];
finalv = [];
fval = 0;
tprc = 0;
clicked = 0;

function search() {
    save = [];
    var inputx = document.getElementById("input").value;
    len = inputx.length;
    if (len > 0) {
        var myreg = new RegExp(inputx, "i");
        cat.forEach((cate) => {
            cate.forEach((obj) => {
                if (myreg.test(obj.name)) {
                    //console.log(obj.name);
                    save.push(obj);
                }
            });
        });
    }
    if (save.length > 0) {
        var txtd = "<table align=center><tr><th>Item</th><th>M.R.P</th><th>Category</th><th>Quantity</th></tr>"
        save.forEach((prod) => {
            txtd = txtd + "<tr><td>" + prod.name + "</td><td>" + prod.price + "</td><td>" + prod.category + "</td><td>" + "<input type=number min=0 value=0 size=10 id=" + prod.name + "></td></tr>"
        });
        txtd = txtd + "</table>";
        document.getElementById("content").innerHTML = txtd;
    } else {
        document.getElementById("content").innerHTML = "<p>Please enter the present item name</p>";
    }
}

function reset() {
    document.getElementById("content").innerHTML = "";
    document.getElementById("input").value = "";
}

var valr = 0;
var AddCart = () => {
    clicked = 1;
    // console.log(save);
    if (save.length > 0) {
        let cartdata = "<table align=center id=tab2><tr><th>Item</th><th>Quantity</th></tr>";
        save.forEach((productz) => {
            // console.log(productz.name);
            if (document.getElementById(productz.name) != null) {
                valr = document.getElementById(productz.name).value;
                console.log(valr);
                if (valr > 0) {
                    cart.push({
                        Item: productz.name,
                        Quantity: valr
                    });
                    cartdata = cartdata + "<tr><td>" + productz.name + "</td><td>" + valr + "</td></tr>";
                    console.log(cartdata);

                }
            }
        });
        cartdata = cartdata + "</table>";
        document.getElementById("detail").innerHTML = cartdata;
    } else {
        document.getElementById("detail").innerHTML = "Please select some items first";
    }
}



var checkout = () => {
    if (clicked) {
        if (save.length > 0) {
            finaldata = "<table align=center id=tab2><tr><th>Item</th><th>M.R.P.</th><th>Category</th><th>Quantity</th><th>FinalPrice</th></tr>";
            save.forEach((finalprod) => {
                if (document.getElementById(finalprod.name) != null) {
                    valr = document.getElementById(finalprod.name).value;
                    if (valr > 0) {
                        fval = valr * finalprod.price;
                        tprc = tprc + fval;
                        finalv.push({
                            Items: finalprod.name,
                            cost: finalprod.price,
                            categ: finalprod.category,
                            quant: valr,
                            finalprice: fval
                        });
                        finaldata = finaldata + "<tr><td>" + finalprod.name + "</td><td>" + finalprod.price + "</td><td>" + finalprod.category + "</td><td>" + valr + "</td><td>" + fval + "<//td></tr>"
                    }
                }
            });
            finaldata = finaldata + "</table>";
            document.getElementById("content").innerHTML = finaldata;
        } else {
            document.getElementById("content").innerHTML = "Please select something from the searched items";
        }
    } else {
        document.getElementById("content").innerHTML = "Please Add Something in the cart"
    }
}