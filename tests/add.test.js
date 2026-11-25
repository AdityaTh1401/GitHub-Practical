
const { add, subtract, multiply } = require('../index');

test('Addition of two numbers', () => {
    expect(add(5, 3)).toBe(8);
});

test('Subtraction of two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('Multiplication of two numbers', () => {
    expect(multiply(5, 3)).toBe(15);
});
