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
