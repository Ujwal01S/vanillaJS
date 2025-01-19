let name = "Max";
// let name = "water" not allowed

var sink = "not";
var sink = "wanted";
// var allows re-creating variable but this is unwanted

if (name === "Max") {
  let hobbies = ["Sports", "Cooking"];
  console.log(hobbies);
  var newHobbies = ["kong", "King"];
}
// var is global scope and function declarable so it can still be clg outside

console.log(newHobbies);

function greet() {
  let age = 30;
  let name = "Manuel";
  console.log(name, age, hobbies);
}

console.log(name, hobbies);

greet();
