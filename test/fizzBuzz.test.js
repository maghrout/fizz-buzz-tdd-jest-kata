const fizzBuzz = require('../src/fizzBuzz')

describe('Fizz Buzz Solver', () => {
    it('Should return "" if number is not divisible by 2 or 3', () => {
        expect(fizzBuzz(1)).toEqual("");
        expect(fizzBuzz(7)).toEqual("");
        expect(fizzBuzz(11)).toEqual("");
    })

    it('Should return Fizz if number is divisible by 2 but not 3', () => {
        expect(fizzBuzz(2)).toEqual("Fizz");
        expect(fizzBuzz(8)).toEqual("Fizz");
        expect(fizzBuzz(4)).toEqual("Fizz");
    })

    it('Should return Buzz if number is divisible by 3 but not 2', () => {
        expect(fizzBuzz(3)).toEqual("Buzz");
        expect(fizzBuzz(9)).toEqual("Buzz");
        expect(fizzBuzz(15)).toEqual("Buzz");
    })

    it('Should return FizzBuzz if number is divisible by 2 and 3', () => {
        expect(fizzBuzz(6)).toEqual("FizzBuzz");
        expect(fizzBuzz(12)).toEqual("FizzBuzz");
        expect(fizzBuzz(24)).toEqual("FizzBuzz");
    })
})