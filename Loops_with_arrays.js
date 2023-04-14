// for loop
// console.log(for loop with array);

let arr = [12, 65, 86, 62, 12, 48, 30, 25];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach Loop
// console.log(forEach Loop with array);

arr.forEach((Element) => {
  console.log(Element + Element);
});

// Array.from
// console.log(Array from);

let name = "siraj";
let arrFrom = Array.from(name);

console.log(arrFrom);

//for of loop
// console.log(for of loop);

for (num of arr) {
  console.log(num);
}

//for in loop
// console.log(for in loop);

for (i in arr) {
  console.log(i);
}
