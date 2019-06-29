var movies = {
	'latest': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/latest.json',
	'popular': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/popular.json',
	'upcoming': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/upcoming.json'

}

var moviesArray = [];
var val;

async function getMovies(choice) { 
  try {
    const response = await fetch(movies[choice]);  
    const data = await response.json();
    moviesArray = data;
    console.log(moviesArray)
  } catch (err) {
    console.log("Fetch Error :-S", err);
    return null;
  }
}

document.querySelector('.button').addEventListener('click', function () {
    val = document.querySelector('.textInput').value;
    alert('Значение переменной val: ' + val);
});

function createSampleImage(num) {
  for (var i = 0; i < num; i++) {
    var divItem = document.createElement('div');
    var title = document.createElement('p');  
    var divListImage = document.createElement('div');
    var rating = document.createElement('h1');
    var list = document.getElementById("list");
  
    divItem.classList.add("list__item");
    // divItem.className = "list__item";
    divListImage.classList.add("list__image");
    title.innerHTML = "Мультфильм"
    rating.innerHTML = "8.2"
    divListImage.appendChild(rating);
    divItem.appendChild(title);
    divItem.appendChild(divListImage);
    
    list.appendChild(divItem);
  }

}

createSampleImage(9)
// console.log(document.getElementById("list"));



// moviesArray we are working with this array

// {
//   "id": "Fcr9enC1HcTwDPb",
//   "rating": 6.3,
//   "title": "Люди Икс: Тёмный Феникс",
//   "poster": "https://image.tmdb.org/t/p/w500/927lqua6AHPW4mUflU26yV3APKZ.jpg",
//   "genre": "Фантастика",
//   "release": 1559692800
// },