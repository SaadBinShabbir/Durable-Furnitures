for (var i = 1; i < products.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${products[i].name}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${products[i].name}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = products[a].images[0]
        document.getElementById("price1").innerHTML = "PKR " + products[a].variations[0].price
        document.getElementById("desc1").innerHTML = products[a].description
        document.getElementById("brand1").innerHTML = products[a].brand

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = products[0].images[0]
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = products[a].images[0]
        document.getElementById("price2").innerHTML = "PKR " + products[a].variations[0].price
        document.getElementById("desc2").innerHTML = products[a].description
        document.getElementById("brand2").innerHTML = products[a].brand
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = products[0].images[0]
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""

    }
}