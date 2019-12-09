function descendingOrder(n){

  
  var arr = (n).toString(10).split("").map(Number);
  
  for (var i = 0; arr.length -1 > i; i++) {
    for (var j = 0; arr.length -1 > j; j++) {
    
      if (arr[j+1] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        
      }
      
    }
  }
  var result = parseInt(arr.join(""));

  return result;
}

console.log(descendingOrder(123));