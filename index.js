
const url = ""
async function getMovies('latest') { 
  try {
    const response = await fetch(url);  
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Fetch Error :-S", err);
    return null;
  }
}