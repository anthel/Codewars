function highAndLow(numbers){
  
  var arr = [numbers];
  arr.sort((a, b) => (a - b));
  
  console.log(arr);
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");