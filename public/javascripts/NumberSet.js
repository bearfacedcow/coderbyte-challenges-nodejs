module.exports = class NumberSet {
    constructor() {
        this.numberSet = [];
        this.calculateTotal();
    }

    calculateTotal() {
        this.total = this.numberSet.reduce((t, v) => t + v, 0);
    }

    addNumber(num) {
        if (!isNaN(num)) {
            this.numberSet.push(num);
            this.calculateTotal();
        }

        console.log(`${this.numberSet} = ${this.total}`);
    }

    getTotal() {
        return this.total;
    }

    getNumberSet() {
        return this.numberSet;
    }

    setNumberset(numArr) {
        this.numberSet = numArr.filter(n => !isNaN(n));
        this.calculateTotal();
    }

    clone() {
        const numSet = new NumberSet();
        numSet.setNumberset(this.getNumberSet());

        return numSet;
    }
}