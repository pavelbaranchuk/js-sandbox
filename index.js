var peoples = [["оксана", 15], ["василий", 21], ["сереженька", 43]]
var objPeople = []
function otvet(array){
	for (var i = 0; i < array.length; i++){
 var objPerson = {}
 objPerson.name = array[i][0];
 objPerson.age = array[i][1];
 objPeople.push(objPerson)
 }
 return objPeople
}

var check = otvet(peoples);
console.log("dsfdsgt", check)

document.getElementById("app").innerHTML = JSON.stringify(check);