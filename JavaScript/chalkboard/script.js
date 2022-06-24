//Exercise 2
function animal() {
    var array = [];
    array.push("koala");
    array.push("dog");
    array.push("eagle");
    array.push("panther");
    array.push("cat");
    var min = 0;
    var max = 4;
    console.log(array[randomNumber (min, max)]);
    // console.log("cat");
    // console.log("panther");
    // console.log("eagle");
    // console.log("dog");
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//Exercise 3

// function cities() {
//     console.log("Sydney");
// }

//Exercise 4

// function favBook(bookName){
//     console.log(bookName);
// }
function favBook(magazineName){
    console.log(magazineName);
}

//Exercise 5

function money(bank, num){
    console.log(" Hey " + bank + " can I borrow $" + num + " from you? ")
}
