//prettier-ignore
const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//prettier-ignore
const punctMarks = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const fieldOne = document.getElementById("passwordOne");
const fieldTwo = document.getElementById("passwordTwo");
const mergedArrays = letters.concat(numbers, punctMarks);
const flattenedArrays = mergedArrays.flat();
const copyText = document.querySelector("#passwordOne");

function randomElement(int) {
  return Math.floor(Math.random() * int);
}

function callString() {
  let fieldString = [];
  for (let i = 0; i < 15; i++) {
    fieldString.push(flattenedArrays[randomElement(flattenedArrays.length)]);
    newString = fieldString.join("");
  }
}

function genPasswords() {
  callString();
  fieldOne.innerText = newString;
  callString();
  fieldTwo.innerText = newString;
}
