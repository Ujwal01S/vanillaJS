function sum(num1, num2) {
  return num1, 1 + num2;
}

console.log(sum(1, 2));

// these below are not pure function

function randSum(num1, num2) {
  const sum = (num1 + num2) * Math.random(num1);
}

console.log(randSum(1, 3));

// althought this gives same result everytime but this changes value of outside

let prevousResult = 0;

function effect1(num1, num2) {
  const sum = num1 + num2;

  prevousResult = sum;
  return sum;
}

// factory functin

function createTaxCalclulator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVat = createTaxCalclulator(0.16);

// console.log({ calculateVat, result: calculateVat(100) });

// Learning clouser in detail

let userName = "Max";

function greetUser() {
  // let name = userName;
  let name = "Anna";
  // console.log("Hi" + userName); reulst Manuel
  console.log("Hi" + name); //result Anna the inner lexical has higher priority over outer lexical this concept is called shadowing if there is no name inside than it will look outside
}

let name = "Max";

userName = "Manuel";

greetUser();

// RECURSION

function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));
