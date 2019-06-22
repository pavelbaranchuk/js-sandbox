const movies = {
	'latest': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/latest.json',
	'popular': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/popular.json',
	'upcoming': 'https://raw.githubusercontent.com/pavelbaranchuk/js-sandbox/master/API/upcoming.json'

<<<<<<< HEAD
var check = otvet(peoples);
console.log("check", check)
=======
}
>>>>>>> origin

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