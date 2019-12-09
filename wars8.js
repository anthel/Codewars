function validatePIN (pin) {
  let isNumber = Number.isInteger(pin);
  if(pin.length == 4 || pin.length == 6) {
    if(isNumber) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

console.log(validatePIN(-2));