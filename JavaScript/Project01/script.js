window.onload = function() {

  };

function showText() {
    var name = document.getElementById("name").value;
    var drink = document.getElementById("drink").value;
    var snack = document.getElementById("snack").value;
    console.log(name);
    console.log(drink);
    console.log(snack);
    document.getElementById("div-text").innerHTML = "Hi there "+name+", it seems that you enjoy eating "+snack+" and drinking "+drink+"!";
}

