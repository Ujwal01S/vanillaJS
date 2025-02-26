// const movieList = document.getElementById("movie-list");

// movieList.style["backgroundo-color"] = "red";

// movieList.style.display = "block";

// //without the squarebracket notation it will be movieList.display.backgroundColor = 'red'

// let person = {
//   "first name": "Ujwal",
//   age: 23,
//   hobbies: ["Sport", "Learning"],
//   greet: function () {
//     alert("Hi there");
//   },
//   1.5: "hello",
// };

// //deleting property

// delete person.age;

// person.isAdmin = true;

// person.hobbies.push("Water");

// console.log(person["first name"]);
// console.log(person[1.5]); //here now we don't have to wrap in qouts but we can becuase js can automatically coerce this to string

const addMovieBtn = document.getElementById("add-movie-btn");

const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filterMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filterMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let { getFormattedTitle } = movie;

    let text = getFormattedTitle.call(movie);

    for (const key in movie.info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }

    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;

  renderMovies(filterTerm);
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (extraName.trim() === "" || extraValue.trim() === "") {
    return;
  }

  const newName = {
    info: {
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULTR";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  newName.info.title = title;
  console.log(newName.info.title);

  movies.push(newName);
  console.log(newName);
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

// const member = {
//   teamMember: "Blue ROcket",
//   people: ["MAX", "MANUAL"],
//   getTeamMembers() {
//     this.people.forEach((p) => {
//       console.log(p + "-" + this.teamMember);
//     });
//   },
// };

// member.getTeamMembers();
