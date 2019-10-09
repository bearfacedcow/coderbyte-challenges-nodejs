const BinaryPatternGenerator = require('../public/javascripts/binarycombinations/BinaryPatternGenerator');

let testObj;

beforeEach(() => {
    testObj = new BinaryPatternGenerator();
});

test("should generate a single binary pattern", () => {
    testObj.generate("1001001");
    const patterns = testObj.getPatterns();

    expect(patterns.length).toBe(1);
});

test("should generate a spawned binary pattern", () => {
    testObj.generate("100?");
    const patterns = testObj.getPatterns();

    expect(patterns.length).toBe(2);
    expect(patterns[0]).toEqual(['1','0','0','1'])
    expect(patterns[1]).toEqual(['1','0','0','0'])
});