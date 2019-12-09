function squareDigits(num){

  var arr = Array.from(String(num), Number);
  var newArr = [];

  console.log(arr);
  
  for (var i = 0; i < arr.length; i++) {
  
    var thisNum = parseInt(arr[i]);
    var multNum = thisNum * thisNum;
    newArr.push(multNum);
  }

  return parseInt(newArr.join(''));
}

console.log(squareDigits(9119));