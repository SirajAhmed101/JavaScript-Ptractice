// CWH Chapter 5 Question
// Q1 add number in existing array

let arr = [2, 4, 6, 8, 10, 20];
// arr.push("5");
// console.log(arr);

// Using Prompt

// let userInput = parseInt(prompt("enter a number"));
// arr.push(userInput);
// console.log(arr);

// Q2 Keep adding number in existing array until 0 is added to the array

let arr1 = [2, 4, 6, 8, 10, 20];
let userInput;

do {
  userInput = parseInt(prompt("enter a number"));
  arr.push(userInput);
} while (userInput != 0);

console.log(arr1);

// Q3 Filter the number who division by 10

let arr2 = [2, 4, 6, 8, 10, 20];

let result = arr2.filter((value) => {
  return value % 10 == 0;
});

console.log(arr2);
console.log(result);

// Q4 create an array of square of given number

let arr3 = [2, 4, 6, 8, 10, 20];

let squareArray = arr3.map((value) => {
  //   return value ** 2;
  return value * value;
});
console.log(squareArray);

// Q4 use reduce to calculate factorial of a given number from an array of first n natural number (n being the number whose factorial needs to be calculate)

let arr4 = [1, 2, 3, 4, 5, 6];

let n = arr4.reduce((a, b) => {
  return a * b;
});
console.log(n);
