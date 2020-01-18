const fizzBuzz = function fizzBuzz(number) {
    if(number % 2 === 0 && number % 3 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Buzz";
    } else if (number % 2 === 0) {
        return "Fizz";
    }
    return "";
}

module.exports = fizzBuzz;