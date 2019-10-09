module.exports = class TwoPairSum {
    constructor(targetSum, numberList) {
        this._pairs = [];
        this.targetSum = targetSum;
        this.numberList = numberList;
    }

    get targetSum() {
        return this._targetSum;
    }

    set targetSum(value) {
        if (!isNaN(value)) {
            this._targetSum = value;
            this.findPairs();
        }
    }

    get numberList() {
        return this._numberList;
    }


    set numberList(value) {
        if (Array.isArray(value)) {
            this._numberList = value.filter(n => !isNaN(n));
            this.findPairs();
        }
    }

    get pairs() {
        return this._pairs;
    }

    findPairs() {
        this._pairs = []; // always reset
        if (Array.isArray(this._numberList)) {
            const hashTable = [];
            this._numberList.forEach(num => {
                if (hashTable.length) {
                    const foundMatch = hashTable.find(find => (num + find) === this._targetSum);
                    if (foundMatch) {
                        this._pairs.push([num, foundMatch]);
                    } else {
                        hashTable.push(num);
                    }
                } else {
                    hashTable.push(num);
                }
            });
        }
    }
};