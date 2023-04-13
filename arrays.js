let marks_of_students = [90, 82, 56, 70, 59, 35, 88, false, "not present"];

marks_of_students[5] = 60; // Changing the Value of array
marks_of_students[9] = 83; // Adding the Value of array

console.log(marks_of_students);
console.log(`the lenght of student marks ${marks_of_students.length}`);

let num = [1, 45, 35, 6, 20];

console.log("// convert into String");
let a = num.toString(); // a is now string

console.log(typeof a);

// Join
console.log("// Join method");

let b = num.join(" and ");
console.log(b);
console.log(typeof b);

//POP  -- Remove last element from the array
console.log("// POP method");

let c = num.pop();
num.pop();
console.log(num);
console.log(c);
console.log(typeof num);

//Push
console.log("// Push method");

let d = num.push(58); // push return the new array length add the new element end of the array

console.log(num);
console.log(d);
console.log(typeof num);

//Shift
console.log("// Shift method");

let e = num.shift(); // remove first element and returns it
console.log(num);
console.log(e);
console.log(typeof num);

// Unshift
console.log("// Unshift method");

let f = num.unshift(20); // add first element to the begining and returns new array length
console.log(num);
console.log(f);
console.log(typeof num);

// Delete
// delete is a operator not a method
console.log("// Delete operator");

delete num[0];
console.log(num);
console.log(num.length);

// Concat
console.log("// Concat");

// Used to Join Array to the given array
let num2 = [12, 151, 631, 13, 456, 65, 98, 55];
let num3 = [122, 15, 31, 183, 46, 656, 598, 655];

let newArray = num.concat(num2, num3);

console.log(newArray);
console.log(num);
console.log(num2);
console.log(num3);

// Sort
console.log("// Sort");

// is Used to sort an Array alphabetically

let sort = num.sort();
console.log(sort);

// for sorting ascending/descending ordeer

let ascending = (a, b) => {
  return a - b;
}; // Ascending order

let descending = (a, b) => {
  return b - a;
}; // Descending order

let ascendingSort = newArray.sort(ascending);

let descendingSort = newArray.sort(descending);

console.log(ascendingSort);
console.log(descendingSort);

// Reverse Array
console.log("// Reverse array");

// for reverse the Array

console.log(num);
let reverse = num.reverse();
console.log(reverse);

//Splice and slice
// is used to add element in the array
//  note: Splice(position to add, no of element to remove, elements to be added)

console.log("// Slice and Splice");

// slice it is used to out of peice  element from the array and creare a new array

// example
// splice
console.log("//Splice");

newArray.splice(3, 5, 1111, 1112, 1113, 1114, 1115, 1116, 1118);

console.log(newArray);

// slice
console.log("//Slice");

console.log(num);

var newNum = num.slice(3);
var newNum = num.slice(1, 4);
console.log(newNum);
