const Letter = require("./Letter");

// Describe 1: Word class is responsible for creating the array of Letter objects.
class Word {
  // Since we are guessing a word, we must split the word into a letters array and rejoin below once the word is guessed. We need to loop over the letters in the word and create a new instance of the Letter constructor seen on Letter.js.
  constructor(word) {
    // this.letters = word.split("").map((char) => new Letter(char));
  }

  // Describe 2: Check to see if the letter guessed is correct - return true. If the letter guessed is incorrect then return false. Rejoin the letters from an array back to a string.
guessLetter(){
    
}
  //Describe 3: Check to see if the word guessed is correct - return true. If the guessed word is incorrect - return false. Make letters visible.
}

module.exports = Word;
