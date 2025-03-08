

// document.getElementById("num1")
// document.getElementById("num2")

// console.log(document.getElementById("num1").value);

// js comjparison operators

// == is equal to value
// === is equal to value and type
// != is not equal to value
// !== is not equal to value and type
// <,> is less than and greater than
// =<, >= is less than equal and greater than equal
// ? ternary operator

// let x = "sajal";
// let y = "sajal";

// console.log(x == y);
// console.log(x != y);

// console.log(x === y);
// console.log(x !== y);

// console.log(x > y);
// console.log(x < y);

// console.log(x >= y);
// console.log(x <= y);

// &&	and	(x < 10 && y > 1) is true	
// ||	or	(x == 5 || y == 5) is false	
// !	not	!(x == y) is true

// let x = 5;
// let y = 4;

// console.log(x < 12 && y >3);
// console.log(x == 5 || y == 4);
// console.log(!(x == y));

function myAge() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("demo").innerHTML = voteable + " to vote.";
  }








