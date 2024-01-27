const { log } = require('console');
const fs = require('fs');
const filePath = './text file analysis/text.txt';

let specialCharacters = ['.', ',', ':', ';', '!', '?', '\'', '"', '-', '_', '(', ')', '{', '}', '[', ']', '+', '*', '/', '%', '=', '==', '!=', '<', '>', '<=', '>=', '&&', '||', '!', '@', '#', '$', '&', '*', '~', '^', ' ', '\t', '\n', '\r'];
function findMostFrequentChar(inputString) {
  var charFrequency = {};

  for (var i = 0; i < inputString.length; i++) {
      var currentChar = inputString[i];

      // Проверка наличия символа в specialCharacters
      if (specialCharacters.indexOf(currentChar) === -1) {
          if (charFrequency[currentChar]) {
              charFrequency[currentChar]++;
          } else {
              charFrequency[currentChar] = 1;
          }
      }
  }

  var mostFrequentChar = '';
  var highestFrequency = 0;

  for (var char in charFrequency) {
      if (charFrequency[char] > highestFrequency) {
          mostFrequentChar = char;
          highestFrequency = charFrequency[char];
      }
  }

  return mostFrequentChar;
}


function findMostFrequentWord(inputString) {

  var words = inputString.split(/\s+/);

  var wordFrequency = {};

  for (var i = 0; i < words.length; i++) {
      var currentWord = words[i];
      if (wordFrequency[currentWord]) {
          wordFrequency[currentWord]++;
      } else {
          wordFrequency[currentWord] = 1;
      }
  }

  var mostFrequentWord = '';
  var highestFrequency = 0;

  for (var word in wordFrequency) {
      if (wordFrequency[word] > highestFrequency) {
          mostFrequentWord = word;
          highestFrequency = wordFrequency[word];
      }
  }

  return mostFrequentWord;
}


let words = 1;
let row  = 0;
let char = 0



fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  
  for (let i = 0; i < data.length; i++) {
    
    let symbol = data[i];
    
    if (symbol == " " || symbol == "\n"){
      words ++;
    }
    else if(symbol == "."){
      row ++;

    }
    else if (!(symbol in specialCharacters )){
      char ++;     
      
    }
     
    
    
  }
  let frequency = findMostFrequentChar(data);
  let frequency_word = findMostFrequentWord(data);
  

  console.log("Words:",words);
  console.log("Letters:",char);
  console.log("Sentences:",row);
  console.log("Letter frequency:",frequency);
  console.log("Word frequency:",frequency_word);
  

  
});
