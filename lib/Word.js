const Letter = require("./Letter");

// Describe 1: Word class is responsible for creating the array of Letter objects.
class Word {
  // Since we are guessing a word, we must split the word into a letters array and rejoin below once the word is guessed. We need to loop over the letters in the word and create a new instance of the Letter constructor seen on Letter.js.
  constructor(word) {
    this.letters = word.split("").map(char => new Letter(char));
    this.word = word;
  }

  getSolution() {
    return this.letters
    .map(letter => letter.getSolution()).join('');
  }

  toString() {
    return this.letters.join(' ');
  }


  // Describe 2: Check to see if the letter guessed is correct - return true. If the letter guessed is incorrect then return false.
  guessLetter(char) {
    let test = false;
    for (let i = 0; i < this.letters.length; i++) {
      // console.log(this.letters[i]);
      if (this.letters[i].guess(char)) {
        test = true;
      }
    }
    return test;
  }

  // toString() {
  //   return this.letters.join(" ");
  // }

  //Describe 3: Check to see if the word guessed is correct - return true. If the guessed word is incorrect - return false. Make letters visible and rejoin the letters into a string rather than an array.
  guessedCorrectly() {
    let test = false;
    // for (let i = 0; i < this.letters.length; i++) {
    //   // console.log(this.letters[i].visible);
      if (this.letters.join('') === this.word) {
       test = true;
      }
    return test;  
  }
}

module.exports = Word;
