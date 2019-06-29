var movies = {
  latest:
    "https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/latest.json",
  popular:
    "https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/popular.json",
  upcoming:
    "https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/upcoming.json"
};

var moviesArray = [];
var val;

async function getMovies(choice) {
  try {
    const response = await fetch(movies[choice]);
    const moviesArray = await response.json();
    console.log("moviesArray", moviesArray)
    // createMovies(moviesArray);
    // delete console.log and uncomment function when it will be implemented
  } catch (err) {
    console.log("Fetch Error :-S", err);
    return null;
  }
}

document.querySelector(".button").addEventListener("click", function() {
  val = document.querySelector(".textInput").value;
  alert("Значение переменной val: " + val);
});

function createMovies(array) {
  array.forEach(element => {
    var list = document.getElementById("list");
    var divListItem = document.createElement("div");
    
    // Your code
  });
}

getMovies('latest')
