const BinaryPattern = require('./BinaryPattern');

module.exports = class BinaryPatternGenerator {

    constructor() {
        this.binaryPatterns = [];

        this.binaryPatterns.push(new BinaryPattern());
    }

    generate(pattern) {
        const patternList = pattern.split('');
        patternList.forEach(patternChar => {
            const patternQueue = [];    // hold for cloned patterns

            this.binaryPatterns.forEach(binPatObj => {
                const retObj = binPatObj.addItem(patternChar);

                if (retObj !== binPatObj) {
                    patternQueue.push(retObj);
                }
            });

            patternQueue.forEach(qItem => {
                this.binaryPatterns.push(qItem);
            });
        });
    }

    getPatterns() {
        return this.binaryPatterns.map(pat => pat.getPattern());
    }
};