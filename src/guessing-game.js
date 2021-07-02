class GuessingGame {
    constructor() {
        this.numbers = []
        this.version = null
    }

    setRange(min, max) {
        this.numbers = []
        for(let i=min; i <= max; i++) {
            this.numbers.push(i)
        }
        this.version = Math.ceil((min + max) / 2)
    }

    guess() {
        return this.version;
    }

    lower() {
        const min = this.numbers[0]
        const max = this.version;
        this.setRange(min, max)
    }

    greater() {
        const min = this.version;
        const last = this.numbers.length - 1 
        const max = this.numbers[last]
        this.setRange(min, max)
    }
}

module.exports = GuessingGame;
