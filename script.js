//prettier-ignore
const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//prettier-ignore
const punctMarks = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let mkPassword = document.getElementById("mkPassword");

//add random index function
function getRandom(char) {
  return Math.floor(Math.random() * char);
}
//console.log(letters[getRandom(letters.length)])

//call function using arrays
function combineArrays() {
  ltr = letters[getRandom(letters.length)];
  nbr = numbers[getRandom(numbers.length)];
  punct = punctMarks[getRandom(punctMarks.length)];
  combo = ltr + nbr + punct;
  passwordOne.innerText = combo;
  ltr = letters[getRandom(letters.length)];
  nbr = numbers[getRandom(numbers.length)];
  punct = punctMarks[getRandom(punctMarks.length)];
  combo = ltr + nbr + punct;
  passwordTwo.innerText = combo;
}

//concat random array outputs
//random sort new array
