// 1. Declare a variable age and check if the person is an adult
let age = 25;
let isAdult = age >= 18 ? true : false;
console.log("Is Adult:", isAdult);

// 2. Perform operations with x = 10 and y = 5
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// 3. Check if a number n is even or odd
let n = 7; // You can change this number
let isEven = (n % 2 === 0) ? "Even" : "Odd";
console.log(`The number ${n} is ${isEven}.`);

// 4. Store numbers from 1 to 5 in an array
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
    numbersArray.push(i);
}
console.log("Numbers Array:", numbersArray);
