const movies = {
  'latest': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/latest.json',
  'popular': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/popular.json',
  'upcoming': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/upcoming.json'

}

async function getMovies(choice) {
  try {
    const response = await fetch(movies[choice]);
    const data = await response.json();
    return console.log(data);
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

function crateMovie(array) {
  
  for (var i = 0; i < movies.latest.length; i++) {

    var list = document.getElementById("list")

    var divListItem = document.createElement("div")
    var imgMovie = document.createElement("img")
    var textMovie = document.createElement("div")
    var title = document.createElement("div")
    var genre_1 = document.createElement("h3")
    var rating = document.createElement("div")
    var rating_1 = document.createElement("h1")

    divListItem.classList.add("divListItem")
    imgMovie.classList.add("imgMovie")
    textMovie.classList.add("textMovie")
    title.classList.add("title")
    genre_1.classList.add("genre_1")
    rating.classList.add("rating")
    rating_1.classList.add("rating_1")

    genre_1.innerHTML = "Фантастика"
    rating_1.innerHTML = "2.4"


    list.appendChild(divListItem)
    divListItem.appendChild(textMovie)
    textMovie.appendChild(title)
    title.appendChild(genre_1)
    textMovie.appendChild(rating)
    rating.appendChild(rating_1)
  }
}