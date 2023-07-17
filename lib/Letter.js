class Letter {
  // Describe 1: We must define visible and also character (char). Must also define toString so that only correctly guessed letters return true and the underscore is replaced by the correctly guessed letter. Otherwise the underscore remains.

  // Describe 2: We must define what characters are to show visibly automatically without having to guess such as symbols.
  constructor(char) {
    this.visible = !/[a-z1-9]/i.test(char);
    this.char = char;
  }

  toString() {
    if (this.visible === true) {
      return this.char;
    }
    return "_";

  }

  // Describe 3: Correct guess must become visible and return true removing the underscore and replacing it with the letter. Or incorrect guesses return false allowing the underscore to remain.
  guess(charGuess) {
    if (charGuess.toUpperCase() === this.char.toUpperCase()) {
      this.visible = true;
      return true;
    }
    return false;
  }

  // Describe 4: 'getSolution' returns the character.
  getSolution() {
    return this.char;
  }
}


module.exports = Letter;
