window.onload = function() {

};

function showText() {
  var name = document.getElementById("name").value;
  
  console.log(name);
  
  document.getElementById("div-text").innerHTML = "You are going to have a wonderful day, "+name+".";
  showText2();
}

function showText2() {

  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  console.log(number1);
  console.log(number2);
  var text = document.getElementById("div-text").innerHTML;
  var add = (number1*1) + (number2*1);
  document.getElementById("div-text").innerHTML = text+ "By the way, the sum of your numbers is " +add;
}