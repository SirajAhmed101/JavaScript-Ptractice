// MAP -map create a new array
console.log("MAP Method");

// Map and forEach work same but diffrence is map create a new array and forEarch loop do operations existing element

let num = [45, 564, 254, 4, 185, 20, 41, 874];

let map = num.map((value, index, array) => {
  console.log(value, index, array);
  return Math.floor(value / 2);
});

console.log(map);

// Filter Method -
console.log("Fliter Method");

let num2 = [12, 24, 48, 50, 15, 30, 10];

let graterThanTen = num2.filter((g) => {
  return g <= 30;
});

console.log(graterThanTen);

// Reduce Method - Return a Value
console.log("Reduce Method");

let arr3 = [50, 50, 50, 50];

let singleValue = arr3.reduce((a, b) => {
  return a + b;
});

console.log(singleValue);
const sum = (a, b) => {
  return a + b;
};

let singleValue2 = arr3.reduce(sum);

console.log(singleValue2);
