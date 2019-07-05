const movies = {
  'latest': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/latest.json',
  'popular': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/popular.json',
  'upcoming': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/upcoming.json'

}

var moviesArray = [];
var moviesNum = '';

async function getMovies(choice, num) {
  try {
    list.innerHTML = ''
    const response = await fetch(movies[choice]);
    const moviesArray = await response.json();
    createMovies(moviesArray, num);
  } catch (err) {
    console.log("Fetch Error :-S", err);
    return null;
  }
}

document.querySelector(".button").addEventListener('click', function numMovies() {
  moviesNum = document.querySelector('.textInput').value;
  getMovies('latest', moviesNum);
});

function createMovies(array, num) {
  for (var i = 0; i < num; i++) {
    var list = document.getElementById("list")

    var divListItem = document.createElement("div")
    var divPoster = document.createElement("div")
    var spanGenre = document.createElement("span")
    var img = document.createElement("img")
    var spanRating = document.createElement("span")
    var spanTitle = document.createElement("span")

    divListItem.classList.add('list__item')
    divPoster.classList.add('poster')
    spanGenre.classList.add('genre')
    img.setAttribute('src', array[i].poster)
    spanRating.classList.add('rating')
    spanTitle.classList.add('title')

    spanGenre.innerHTML = array[i].genre
    spanRating.innerHTML = array[i].rating
    spanTitle.innerHTML = array[i].title

    divPoster.appendChild(spanGenre)
    divPoster.appendChild(img)
    divPoster.appendChild(spanRating)
    divListItem.appendChild(divPoster)
    divListItem.appendChild(spanTitle)

    list.appendChild(divListItem)
  }
}

getMovies("latest", 20)