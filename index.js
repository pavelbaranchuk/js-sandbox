var arr = [1, 2, 3, 0, 4, 5, 6] 

var result = 0;
arr.reduce(function(res, elem) {
if (elem === 0) {
   result = res;
   return res;
  }
 return res + elem;
})

	document.write(result)
	