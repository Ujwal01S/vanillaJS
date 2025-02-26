// const number = [1, 2, 3];

// console.log(number);

// const moreNumbers = Array(2, 5);

// const number2 = new Array(2, 9);

// const listItems = document.querySelectorAll("li");

// console.log(listItems);

// const arrayListItems = Array.from(listItems);

// console.log(arrayListItems);

//what data can you store in array

// const hobbbies = ["learning", "research"];

// const personalData = [
//   23,
//   "Ujwal",
//   { moreDetail: { school: "BSES", address: "Pandu" } },
// ];

// const analyticsData = [
//   [12.5, 65],
//   [4.5, 65],
// ];

// for (singleData of analyticsData) {
//   for (data of singleData) {
//     console.log(data);
//   }
// }

// console.log(personalData[2], personalData[1]);

//----------------------Adding and removing array element

// const hobbbies = ["Learning", "Reasearching"];

// hobbbies.push("Coding"); //adds at the end
// const length = hobbbies.unshift("Clarity"); //adds at the begining
// const removedValue = hobbbies.pop(); //removes last one
// const value = hobbbies.shift(); //removes 1st one
// // console.log({ value });
// console.log(hobbbies);

// //push and pop are faster as it only adds or remove while shift and unshift shifts element right and left

// //The splice method very useful

// hobbbies.splice(0, 0, "Good Food"); // add at index zero

// hobbbies.splice(1, 0, "Adding at 2nd index");

// const removedItem = hobbbies.splice(0, 1); //remove one item starting from index 0

// // console.log(removedItem);

// console.log(hobbbies);

//--------------------slice

// const totalResults = [1, 5.3, 1.5, 10.99, -5, 10];

// const storedResults = totalResults.concat([3, 9]);

// console.log(totalResults.includes(1.5));

// const newArray = totalResults.slice(0, 2);
// console.log(newArray);
// totalResults.push(8);

// console.log(storedResults, totalResults);

// //-------------find and findIndex

// const personData = [{ name: "Max" }, { name: "Manuel" }];

// const manuel = personData.find((person, index, persons) => {
//   return person.name === "Manuel";
// });

// //doesn't copy data but address of data so changes entire thing
// manuel.name = "Anna";

// console.log(manuel, personData);

// const prices = [10.99, 5.99, 3.99, 6.59];

const tax = 0.9;

// prices.forEach((price, idx, prices) => {
//   taxAdjustedPrices.push(price * (1 + tax));
// });

// const taxAdjustedPrices = prices.map((price, inx, prices) => {
//   return { index: inx, taxAdjPrice: price * (1 + tax) };
// });

// const sortedPrice = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedPrice.reverse());

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
//   // any price that is above 6 is true so it is kept and price below 6 is false so it is removed
// });

// console.log(filteredArray, prices);

// console.log(taxAdjustedPrices, prices);

const prices = [10.99, 5.99, 3.99, 6.59];

// const sum = prices.reduce((prevValue, currentValue, currentIndex, prices) => {
//   return prevValue + currentValue;
// }, 0);

// console.log({ sum });

// const data = "New York;10;99;20000";
// const transformedData = data.split(";");

// console.log({ transformedData });

const nameFragment = ["Horse", "Max", "mr", 30];

// const newNameFragment = [...nameFragment];

// nameFragment.push("Mouse");

// // ...price monent when just spread helps or one of case

// // console.log(Math.min(...prices));

// console.log({ nameFragment, newNameFragment });

// const [fristName, lastName] = nameFragment;

// console.log(fristName, lastName);

const person1 = { name: "max" };
const person2 = { name: "manuel" };

const personData = new Map([[person1, [{ data: "yestardaly", price: 100 }]]]);

personData.set(person2, [{ data: "two weeks ageo", price: 200 }]);

console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const value of personData.values()) {
  console.log(value);
}
