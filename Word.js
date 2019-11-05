class letter {
    constructor(value, guessed){
        this.value = value,
        this.guessed = guessed,
        guessed = false
    }

    returnLetter() {
        if (this.guessed = true){
            return this.letter
        } else {
            return "_ "
        }
    }

    checkGuess(guess) {
        if (guess === this.letter) {
            this.guessed = true
        }
    }
}


module.exports = letter