function preFizz(n) {
    var result = "";
    if(n % 3 == 0) {
      result += "Fizz";
    }
    if(n % 5 == 0) {
      result += "Buzz";
    }
    if(n % 3 != 0 && n % 5 != 0) {
      result = n;
    }
    return result;
}

console.log(preFizz(9));