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
window.onload = function () {
  var val;
  document.querySelector("#b1").addEventListener('click', function () {
      val = document.querySelector('#i1').value;
      alert('Значение переменной val: ' + val);
  });

  document.querySelector("#b2").addEventListener('click', function () {
      val = "changed";
      alert('Значение переменной val: ' + val);
  });

  document.querySelector("#b3").addEventListener('click', function () {
      alert('Значение переменной val: ' + val);
  });

}


