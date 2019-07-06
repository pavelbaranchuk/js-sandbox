const movies = {
  'latest': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/latest.json',
  'popular': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/popular.json',
  'upcoming': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/upcoming.json'

}

var moviesArray = [];
var val;

async function getMovies(choice, num) {
  try {
    const response = await fetch(movies[choice]);
    const moviesArray = await response.json();
    // console.log("moviesArray", moviesArray)
    createMovies(moviesArray, num);
    // delete console.log and uncomment function when it will be implemented
  } catch (err) {
    console.log("Fetch Error :-S", err);
    return null;
  }
}
var val2

document.querySelector(".button").addEventListener('click', function numMovies() {
  val = document.querySelector('.input').value;
  getMovies('latest', val);
});
document.querySelector(".button2").addEventListener('click', function numMovies() {
  val2 = document.querySelector('.input2').value;
  getMovies('latest');
});

function createMovies(array, num) {
  
  for (var i = 0; i < 20; i++) {
    
    var list = document.getElementById('list');

    var divListItem = document.createElement('div');
    var divPoster = document.createElement('div');
    var genre = document.createElement('span');
    var img = document.createElement("img");
    var rating = document.createElement('span');
    var title= document.createElement('span');

    if ( val === array[i].genre) {
      
    divListItem.classList.add('list__item');
   
    divPoster.classList.add('poster');
    genre.classList.add('genre');
    rating.classList.add('rating');
    title.classList.add('title');
  
  
    img.src = array[i].poster
    genre.innerHTML = array[i].genre
    rating.innerHTML = array[i].rating
    title.innerHTML = array[i].title
  
  
    divPoster.appendChild(genre);
    divPoster.appendChild(img);
    divPoster.appendChild(rating);
  
    divListItem.appendChild(divPoster);
    divListItem.appendChild(title);
    
    list.appendChild(divListItem);
  }

}
}
  getMovies('latest',20)