const snackServings = 50;
const guests = 40;
const sum = snackServings + guests;

console.log("01: The sum of both are:", sum);
console.log("------------------------------------------");

const sum2 = snackServings - guests;
const sum3 = guests - snackServings;

console.log("02a:Snacks minus guests", sum2);
console.log("02b:Guest -snacks", sum3);

console.log("------------------------------------------");

console.log("03: Snacks multiplied by guests", snackServings * guests);
console.log("------------------------------------------");
console.log("04: Snacks divided by guests", snackServings / guests);
console.log("------------------------------------------");

const drinks = 10;
const resultOne = (snackServings * guests) / drinks;
console.log("05:The result is", resultOne);

console.log("------------------------------------------");

const monkeys = 15;
const bananas = 9;
console.log("06:monkeys divided by bananas:", monkeys / bananas);

console.log("------------------------------------------");

const monkeyfights = 20;
const resultTwo = (monkeys + bananas) * monkeyfights;
console.log("07:The result is", resultTwo);

console.log("------------------------------------------");

const monkeybusiness = 90 + 1;
const boredom = 13 - 1;
const happiness = monkeys - bananas;

console.log(
  "10: The result of adding happiness to monkeyfights is ",
  happiness + monkeyfights
);

console.log("------------------------------------------");

console.log(
  "11: The remainder og resultOne divided by resultTwo is ",
  resultOne % resultTwo
);

console.log("--------------CUSTOM EXERCISES----------------------------");

const celsius = 0;
const fahrenheit = celsius * 1.8 + 32;

console.log("01: 0 degrees Celsius is ", fahrenheit + " degrees fahrenheit");

console.log("--------------CUSTOM EXERCISES----------------------------");

const number = 2674;
const numberString = number.toString();
console.log("02:The length of the number is", numberString.length);

console.log("--------------CUSTOM EXERCISES----------------------------");

let x = 3;
x++;
x = x * 2;
x--;

console.log("03: X equals", x);

console.log("--------------CUSTOM EXERCISES----------------------------");

const number1 = 1;
const number2 = 2;
const mean = (number1 + number2) / 2;
console.log("04 The mean value is ", mean);

console.log("--------------CUSTOM EXERCISES----------------------------");

const nameMan = "Carly";
const manString = "string" === typeof nameMan ? "true" : "false";

console.log(`Is Carly a String ?`, manString);

console.log("--------------CUSTOM EXERCISES----------------------------");

const base = 4;
const height = 10;
const area = (base * height) / 2;
console.log("06: The area of the triangle is ", area);
