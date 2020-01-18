const fizzBuzz = function fizzBuzz(number) {
    if(number % 2 === 0) {
        return "Fizz";
    } else if (number % 3 === 0) {
        return "Buzz";
    }
    return "";
}

module.exports = fizzBuzz;