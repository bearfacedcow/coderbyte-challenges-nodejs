const BinaryPattern = require('../public/javascripts/binarycombinations/BinaryPattern');

let testObj;

beforeEach(() => {
    testObj = new BinaryPattern();
});

test("adding 1 should populate pattern array", () => {
    testObj.addItem('1');
    expect(testObj.getPattern()).toEqual(['1']);
});

test("adding 0 should populate pattern array", () => {
    testObj.addItem('0');
    expect(testObj.getPattern()).toEqual(['0']);
});

test("adding multiple items should populate pattern array", () => {
    testObj.addItem('1');
    testObj.addItem('0');
    expect(testObj.getPattern()).toEqual(['1', '0']);
});

test("adding crap should not populate pattern array", () => {
    testObj.addItem('1');
    testObj.addItem('0');
    testObj.addItem('c');
    expect(testObj.getPattern()).toEqual(['1', '0']);
});

test("should only populate pattern array with one char", () => {
    testObj.addItem('1');
    testObj.addItem('0');
    testObj.addItem('01');
    expect(testObj.getPattern()).toEqual(['1', '0']);
});

test("should spawn a new BinaryPatter obj when fed a '?'", () => {
    testObj.addItem('1');
    testObj.addItem('0');
    const clonedTestObj = testObj.addItem('?');
    
    expect(testObj.getPattern()).toEqual(['1', '0', '1']);
    expect(clonedTestObj.getPattern()).toEqual(['1', '0', '0']);
});