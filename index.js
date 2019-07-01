const movies = {
  'latest': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/latest.json',
  'popular': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/popular.json',
  'upcoming': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/upcoming.json'

}

var moviesArray = [];

async function getMovies(choice) {
  try {
    const response = await fetch(movies[choice]);
    const moviesArray = await response.json();
    createMovies(moviesArray);
  } catch (err) {
    console.log("Fetch Error :-S", err);
    return null;
  }
}

var val;
document.querySelector(".button").addEventListener('click', function () {
  val = document.querySelector('.input').value;
  alert('Значение переменной val: ' + val);
});

function createMovies(array) {

  for (var i = 0; i < array.length; i++) {
    var list = document.getElementById("list")

    var divListItem = document.createElement("div")
    var imgMovie = document.createElement("img")
    var textMovie = document.createElement("div")
    var genre = document.createElement("div")
    var genre_1 = document.createElement("h3")
    var rating = document.createElement("div")
    var rating_1 = document.createElement("h1")

    divListItem.classList.add("divListItem")
    imgMovie.classList.add("imgMovie")
    textMovie.classList.add("textMovie")
    genre.classList.add("genre")
    genre_1.classList.add("genre_1")
    rating.classList.add("rating")
    rating_1.classList.add("rating_1")

    imgMovie.innerHTML = array[i].poster
    genre_1.innerHTML = array[i].genre
    rating_1.innerHTML = array[i].rating

    list.appendChild(divListItem)
    divListItem.appendChild(imgMovie)
    divListItem.appendChild(textMovie)
    textMovie.appendChild(genre)
    genre.appendChild(genre_1)
    textMovie.appendChild(rating)
    rating.appendChild(rating_1)
  }
}



getMovies('latest')