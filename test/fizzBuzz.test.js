const fizzBuzz = require('../src/fizzBuzz')

describe('Fizz Buzz Solver', () => {
    it('Should return "" if number is not divisible by 2 or 3', () => {
        expect(fizzBuzz(1)).toEqual("");
        expect(fizzBuzz(7)).toEqual("");
        expect(fizzBuzz(11)).toEqual("");
    })

    it('Should return Fizz if number is divisible by 2', () => {
        expect(fizzBuzz(2)).toEqual("Fizz");
        expect(fizzBuzz(6)).toEqual("Fizz");
        expect(fizzBuzz(12)).toEqual("Fizz");
    })
})