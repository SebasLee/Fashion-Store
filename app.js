class Clothes {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
}

var jeans = new Clothes("Jeans", "Blue");
var jacket = new Clothes("Jacket", "Black");

document.getElementById("selection").innerHTML = jeans.color;

console.log(jeans.type);