function remove(s){
 
var str = s;
var done = false;
 
 while(!done) {

  if (str.endsWith("!")) {
    str = str.slice(0,-1);
  }
  else {
    done = true;
    break;
  }
  

  }
  
  return str;
   
 }
 console.log(remove("Hi!!!!!!!!!!"));