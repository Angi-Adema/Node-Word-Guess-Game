class Letter {
// Describe 1: The characters should not be visible. An underscore should show for each character of the words. If the correct letter is guessed, it should replace the underscore with the letter. An incorrect guess should not make any characters visible but if the character is correct it should replace the underscore with the letter.
    constructor(char) {
        this.visible =  !/[a-z1-9]/i.test(char); 
        this.char = char;
    }

    toString() {
        if (this.visible === true) {
            return this.char;
        }
        return '_'; 
    }

    getSolution() {
        return this.char;
    }
// Describe 2: Any characters that are not letters or numbers should be displayed. For letters of the word, there should be an underscore. If the correct letter is guessed the underscore should be replaced with the letter otherwise should return false.
guess(charGuess) {
    if (charGuess.toUpperCase() === this.char.toUpperCase()) {
        this.visible = true;
        return true;
    }
    return false;
}

// Describe 3: The guess function will return true if the letter guess is correct, otherwise it will return false.



// Describe 4: Get the solution letter and return the letter solution if correct.

}

module.exports = Letter;