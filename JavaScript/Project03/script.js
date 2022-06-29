function add() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var array = [];
    array.push(number1);
    array.push(number2);
    array.push(number3);
    var add = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        add = add + element;
        document.getElementById("div-text").innerHTML = "The sum of all your numbers is " +add;
    }
}