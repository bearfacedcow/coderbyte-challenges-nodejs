const CoderByte = require("../public/javascripts/CoderByte");
const NumberSet = require("../public/javascripts/NumberSet");
const BinaryPatternGenerator = require('../public/javascripts/binarycombinations/BinaryPatternGenerator');
const TwoPairSum = require('../public/javascripts/twopairsum/TwoPairSum');
const Test = require('../public/typescript/Test');

var express = require('express');
var router = express.Router();

/* GET our combination */
router.get('/numberset/**', (req, res, next) => {
    const coderByte = new CoderByte();
    const numberList = [];

    const nums = req.params[0].split('/');

    nums.forEach(num => {
        const testNum = parseInt(num);
        if (!isNaN(testNum)) {
            numberList.push(testNum);
        }
    });

    const result = coderByte.solve(numberList);
    const numToSum = result[0].getTotal() || 0;

    res.json({
        status: "success",
        sum: numToSum,
        combinations: result.map(item => item.getNumberSet())
    });
});

router.post('/twopairsum', (req, res) => {
    const targetSum = parseInt(req.body.targetSum);
    const numberList = req.body.numberList.split(',').map(n => parseInt(n));
    const twoPairSum = new TwoPairSum(targetSum, numberList);

    res.json({
        status: 'success',
        pairs: twoPairSum.pairs
    });
});

router.post('/binarypattern', (req, res) => {
   const binaryPatternGenerator = new BinaryPatternGenerator();

    binaryPatternGenerator.generate(req.body.pattern);

    res.json({
        status: 'success',
        patterns: binaryPatternGenerator.getPatterns()
    });
});

// Heck, I even give testing a REST! :)
router.get( '/test', (req, res) => {
    const test = new Test();
    test.str = 'Jordan Chilcott was here';

    res.send(test.toString());
});

module.exports = router;
