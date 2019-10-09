const NumberSet = require('../public/javascripts/NumberSet');

let testObj;

beforeEach(() => {
    testObj = new NumberSet();
});

test('total adds up to expected amount by adding individual numbers', () => {
    testObj.addNumber(1);
    testObj.addNumber(2);
    expect(testObj.getTotal()).toBe(3);
});

test('total adds up via supplied number set', () => {
    testObj.setNumberset([1, 2, 3, 4]);
    expect(testObj.getTotal()).toBe(10);
});

test('filters number sets properly', () => {
    testObj.setNumberset([1, 2, 3, 4, 'crap']);
    expect(testObj.getTotal()).toBe(10);
    expect(testObj.getNumberSet()).toEqual([1, 2, 3, 4]);
});

test('filters our non-numbers', () => {
    testObj.addNumber(1);
    testObj.addNumber(2);
    testObj.addNumber('crap');
    expect(testObj.getTotal()).toBe(3);
    expect(testObj.getNumberSet()).toEqual([1, 2]);
});