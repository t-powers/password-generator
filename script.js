//prettier-ignore
function randLetters(){
  const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return letters[getRandom(letters.length)];
}

function randNumbers() {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return numbers[getRandom(numbers.length)];
}

//prettier-ignore
function randPuncts(){
  const punctMarks = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
  return punctMarks[getRandom(punctMarks.length)];
}

//add random number function
function getRandom(char) {
  return Math.floor(Math.random() * char);
}

let fieldOne = document.getElementById("passwordOne");
let fieldTwo = document.getElementById("passwordTwo");


