/*
let doubleQuoteString = "siraj";

console.log(doubleQuoteString.length);

let singleQuoteString = "siraj";

console.log(singleQuoteString.length);

console.log(singleQuoteString[0]);
console.log(singleQuoteString[1]);
console.log(singleQuoteString[2]);
console.log(singleQuoteString[3]);
console.log(singleQuoteString[4]);
*/

/*
// template literals
let firstName = "Siraj";
let lastName = "Ahmed";

// you can use string and variable in single line using of backtick
let fullName = `this boy first name is ${firstName} and last name is ${lastName}`;

console.log(fullName);
*/

// Escape Sequence Characters
/*
let fruit = `app\'rajle`;
let a = `app\nrajle`; // New line
let b = `app\trajle`; // Tap(add space between)
let c = `app\rrajle`; // Carriage Return(Return charcter after \r)

console.log(fruit);
console.log(a);
*/

/*
// Methouds of String (CRUD- Create, Read, Update, Delete)

let name = "Siraj";

let myFrndName = "Rahul";

let trim = "  Ahmed";

// console.log(name.slice(1, 5));
// console.log(name.slice(3));
// console.log(name.replace("Si", "Ahmed"));
// CONCAT String
// console.log(name.concat(` is a friend of ${myFrndName} ok`));
// TRIM String

// console.log(trim);
// console.log(trim.trim());
*/

//  Quiz Ques use a for loop to print string

// let str = "Siraj Ahmed";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// PRACTICE SET
// Q1.
// let str = "sir\""
// console.log(str.length);  // Output 4

// Q2. Include Method
/*
let name = "my name is siraj";
let findWard = "name";
// let Include = name.includes(findWard);
// let Include = name.includes("name");

console.log(
  `the word "${findWard}"  ${
    name.includes(findWard) ? "is" : "is not"
  } in the sentences`
);

// const name = "flexiple";
// const str2 = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(str2);

*/
/*
// Q3 convert into lowercase

let str = "SIRAJ AHMED";

console.log(`${str.toLowerCase()} converted into Lower case`);

*/
/*
//Q4 Extract the amount (1000) into string
let str = "Please give as Rs 1000";

// let amount = str.slice(18);
let amount = Number.parseInt(str.slice("Please give as Rs".length + 1));

console.log(typeof amount);
console.log(amount);
*/
//Q4 change 4th charc  into string

/*
let fname = "SIRAJ";

console.log(fname.replace("J", "R"));

*/
