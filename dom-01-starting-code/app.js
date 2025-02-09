const h1 = document.getElementById("main-title");
h1.textContent = "New Title!!";

h1.style.color = "white";
h1.style.backgroundColor = "black";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + "(Changed!)";

const listItemElements = document.getElementsByTagName("li");

for (const listEl of listItemElements) {
  console.dir(listEl);
}

const section = document.querySelector("section");
const button = document.querySelector("button");
section.className = "red-bg";
