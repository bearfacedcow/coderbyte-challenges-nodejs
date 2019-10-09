const PowerSet = require('../public/typescript/powerset/PowerSet');
let testObj;

beforeEach(() => {
    testObj = new PowerSet();
});

test('Should be Initialized', () => {
    expect(testObj.powerSet).toEqual([]);
});

test('Should add number', () => {
    testObj.addNumber(1);
    expect(testObj.powerSet).toEqual([1]);
});

test('Should not add garbage', () => {
    testObj.addNumber(1);
    testObj.addNumber('bad');
    expect(testObj.powerSet).toEqual([1]);
});

test('Should clone itself and be a different object', () => {
    testObj.addNumber(1);
    const newTestObj = testObj.clone();
    newTestObj.addNumber(2);
    expect(testObj).not.toStrictEqual(newTestObj);
});

