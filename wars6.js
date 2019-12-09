function find(array, nr) {
  return (array.includes(nr))?array.indexOf(nr):"Not found";
}

var array = [1,2,3,4];
console.log(find(array, 2));