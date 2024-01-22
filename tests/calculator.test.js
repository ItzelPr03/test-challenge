const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    //
    expect(calculator.sum(1,2)).toBe(3)
})

test('substracts a - b', () => {
   //
   expect(calculator.substract(3,1)).toBe(2)
})

test('multiplies a * b', () => {
    //
    expect(calculator.multiply(2,2)).toBe(4)
})

test('divides a / b', () => {
    // Consider decimals
    expect(calculator.divide(5,2)).toBe(2.5)
})

test('Raises to power a ^ b', () => {
    //
    expect(calculator.power(2,2)).toBe(4)
})

