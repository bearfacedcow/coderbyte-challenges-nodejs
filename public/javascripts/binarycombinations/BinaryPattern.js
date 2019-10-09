module.exports = class BinaryPattern {
    constructor() {
        this.pattern = [];
    }

    addItem(item) {
        const testItemsStr = '01?';

        if (item.length === 1 && testItemsStr.indexOf(item) !== -1) {
            if (item === '?') {
                const clonedPattern = this.clone();
                clonedPattern.addItem('0');
                this.pattern.push('1');
                return clonedPattern;
            }

            this.pattern.push(item);
        }

        return this;
    }

    getPattern() {
        return this.pattern;
    }

    setPattern(pattern) {
        this.pattern = [...pattern];
    }

    clone() {
        const aNewClone = new BinaryPattern();
        aNewClone.setPattern(this.getPattern());
        return aNewClone;
    }
};