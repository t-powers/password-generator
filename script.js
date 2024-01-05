//prettier-ignore
const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//prettier-ignore
const punctMarks = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const mergedArrays = letters.concat(numbers, punctMarks);
const flattenedArrays = mergedArrays.flat();

// function randomPick() {
//   flattenedArrays[randomElement(flattenedArrays.length)];
// }

function randomElement(int) {
  return Math.floor(Math.random() * int);
}

let fieldString = [];
for (let i = 0; i < 10; i++) {
  fieldString.push(flattenedArrays[randomElement(flattenedArrays.length)]);
  applyString = fieldString.join("");
}



const fieldOne = document.getElementById("passwordOne");
const fieldTwo = document.getElementById("passwordTwo");

//for loop to iterate random generator 10x
//use random number to Switch to array
//use random number function to pick array location
//return array to html field
