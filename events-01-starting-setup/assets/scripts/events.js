// const Button = document.querySelector("button");

// Button.onclick = function () {
//   alert("Clicked on event");
// };

// const buttonEventHandler = (event) => {
//   event.target.disabled = true;
//   console.log(event);
// };

// Button.onclick = buttonEventHandler;

// const boundeFn = buttonEventHandler.bind(this);

// Button.addEventListener("click", boundeFn);

// const Buttons = document.querySelectorAll("button");

// console.log(Buttons);

// Buttons.forEach((button) => {
//   button.addEventListener("click", buttonEventHandler);
// });

// removing an event

// setTimeout(() => {
//   Button.removeEventListener("click", boundeFn);
// }, 2000);

// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
// });

// const div = document.querySelector("div");

// div.addEventListener("click", (event) => {
//   console.log("CLICKED DIV");
//   console.log(event);
// });

// const button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("CLICKED BUTTON");
//   console.log(event);
// });

const listItems = document.querySelectorAll("li");

const list = document.querySelector("ul");

// listItems.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     event.target.classList.toggle("hightlight");
//   });
// });

// above method is unoptimized

list.addEventListener("click", (event) => {
  event.target.classList.toggle("hightlight");

  // if we have nested element then this is what we do

  event.target.closest("li").classList.toggle("hightlight");
});

// event bubbles up and we get which event triggred the bubble and add css there
