// let sum = 0;
// let n = document.querySelector("#number").value;
// let btn = document.querySelector("#btn1");

// btn.addEventListener("click", calNumbers);

// function calNumbers() {
//   for (let i = 0; i < n; i++) {
//     sum += i + 1;
//     console.log(i + 1, "+");
//   }
//   console.log("Sum of first " + n + " natural numbers is " + sum);
// }

// let sum = 0;
// let n = prompt("Enter a Number");
// n = Number.parseInt(n);

// for (let i = 0; i < n; i++) {
//   sum += i + 1;
// }
// console.log("Sum of first " + n + " natural numbers is " + sum);

// Don't underdstand
// var num = parseInt(prompt("Enter a number ?"));
// var fact = 1;
// while (num > 0) {
//   fact = fact * num;
//   num--;

//   console.log(fact);
//   console.log(num);
// }

// console.log("<br/> Factorail number is :" + fact);

// While Loop CWH

// let n = parseInt(prompt("Enter a Number"));

// let i = 0;

// while (i < n) {
//     console.log(i);
//     i++;
// }

// Do While Loop CWH
// Do while loop excute one time

/*
let n = parseInt(prompt("Enter a Number"));

let i = 0;

do {
  console.log(i);
  i++;
} while (i < n);

*/

// Function CWH

/*
let a = 10;
let b = 20;
let c = 30;

// console.log(c);
function OnePlusAvg(x, y) {
    console.log("Done");
    return Math.round(1 + (x + y) / 2);
}

console.log(OnePlusAvg(5, 35));
console.log(OnePlusAvg(10, 65));
console.log(OnePlusAvg(15, 55));
console.log(OnePlusAvg(15, 59));
console.log(OnePlusAvg(25, 57));
console.log(OnePlusAvg(56, 85));
console.log(OnePlusAvg(a, b));
console.log(OnePlusAvg(c, a));
console.log(OnePlusAvg(c, b));

*/

// About Fat Arrow Function
/*

const sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 10));
*/

// Loops and Function Practice set ch-3 (CWH)
// Q1. solved the quiz using for loop
/*
let marks = {
  harry: 98,
  Raj: 70,
  Shree: 60,
  Akash: 50,
};

// console.log(marks);

for (i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    `The Marks of ${Object.keys(marks)[i]} are ${marks[Object.keys(marks)[i]]}`
  );
}
*/
// Q2. solved the same quiz using for in loop
/*
let marks = {
  harry: 98,
  Raj: 70,
  Shree: 60,
  Akash: 50,
};

for (let key in marks) {
  console.log(`The Marks of ${key} are ${marks[key]}`);
}
*/

// Q3. write a programme untile number is correct
/*
let correctNumber = 20;

let guessNumber;

while (guessNumber != correctNumber) {
  console.log("Try Again");
  guessNumber = prompt("Enter a Correct Number");
}
console.log("You Have Enter A Correct Number");
*/

// Q4. write a function to mean of 5 number.

const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 4;
};

console.log(mean(10, 20, 30, 40, 50));
