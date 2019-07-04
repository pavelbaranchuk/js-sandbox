const movies = {
  'latest': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/latest.json',
  'popular': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/popular.json',
  'upcoming': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/upcoming.json'

}

var moviesArray = [];

async function getMovies(choice) {
  try {
    list.innerHTML = ''
    const response = await fetch(movies[choice]);
    const moviesArray = await response.json();
    createMovies(moviesArray);
  } catch (err) {
    console.log("Fetch Error :-S", err);
    return null;
  }
}

var val;
document.querySelector(".button").addEventListener('click', function numMovies() {
  document.querySelector('.input').value;
  getMovies('latest');
});

function createMovies(array) {

  for (var i = 0; i < val; i++) {

    var list = document.getElementById("list")

    var divListItem = document.createElement("div")
    var imgMovie = document.createElement("img")
    var genre = document.createElement("h3")
    var rating = document.createElement("h1")

    divListItem.classList.add("divListItem")
    imgMovie.classList.add("imgMovie")
    genre.classList.add("genre")
    rating.classList.add("rating")

    list.appendChild(divListItem)
    divListItem.appendChild(genre)
    divListItem.appendChild(imgMovie)
    divListItem.appendChild(rating)

    imgMovie.setAttribute("src", array[i].poster)
    genre.innerHTML = array[i].genre
    rating.innerHTML = array[i].rating
  }
}

getMovies("latest")