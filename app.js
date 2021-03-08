class Clothes {
    constructor(type, color, show) {
        this.type = type;
        this.color = color;
        this.show = show;
    }
}

var jeans = new Clothes("Jeans", "Blue", true);
var jacket = new Clothes("Jacket", "Black", false);

// Jeans 
document.getElementById("type-1").innerHTML = jeans.type;
document.getElementById("color-1").innerHTML = jeans.color;

// Jacket 
document.getElementById("type-2").innerHTML = jacket.type;
document.getElementById("color-2").innerHTML = jacket.color;

// Filter Button
document.getElementById("filter").addEventListener('click', function () {
    if (jacket.show == false) {
        var removeJacket = document.getElementById("type-2")
        removeJacket.remove();
    } 
})
