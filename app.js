class Clothes {
    constructor(type, color, show) {
        this.type = type;
        this.color = color;
        this.show = show;
    }
}

var jeans = new Clothes("Jeans", "Blue", true);
var jacket = new Clothes("Jacket", "Black", false);
var shoes = new Clothes("Converse", "Black", true);

// Jeans 
document.getElementById("type-1").innerHTML = jeans.type;
document.getElementById("color-1").innerHTML = jeans.color;

// Jacket 
document.getElementById("type-2").innerHTML = jacket.type;
document.getElementById("color-2").innerHTML = jacket.color;

// Shoes
document.getElementById("type-3").innerHTML = shoes.type;
document.getElementById("color-3").innerHTML = shoes.color;

function check() {
    document.getElementById("narrow").checked = true;
}

// Filter Button
document.getElementById("filter").addEventListener('click', function () {
    if (document.getElementById("narrow").checked !== false) {
        var removeJacket = document.getElementById("type-2")
        removeJacket.remove();
    } 
})
