const TwoPairSum = require('../public/javascripts/twopairsum/TwoPairSum');

let testObj;

beforeEach(() => {
    testObj = new TwoPairSum(3, [1, 2]);
});

afterEach(() => {
    testObj = null;
});

test('target sum should be initialized', () => {
    expect(testObj.targetSum).toBe(3);
});

test('number list should be initialized', () => {
    expect(testObj.numberList).toEqual([1, 2]);
});

test('target sum should reflect change', () => {
    testObj.targetSum = 4;
    expect(testObj.targetSum).toBe(4);
});

test('number list should reflect change', () => {
    testObj.numberList = [1, 3];
    expect(testObj.numberList).toEqual([1, 3]);
});

test('target sum should not reflect change when garbage entered', () => {
    testObj.targetSum = 'bad';
    expect(testObj.targetSum).toBe(3);
});

test('number list should reflect change when garbage entered', () => {
    testObj.numberList = 'bad';
    expect(testObj.numberList).toEqual([1, 2]);
});

test('number list should not allow non-numbers', () => {
    testObj.numberList = [1, 'bad', 2];
    expect(testObj.numberList).toEqual([1, 2]);
});

test('should be a single pair found', () => {
    expect(testObj.pairs.length).toBe(1);
});

test('should be a two pairs found', () => {
    testObj.targetSum = 7;
    testObj.numberList = [2, 3, 4, 5];

    expect(testObj.pairs.length).toBe(2);
});

