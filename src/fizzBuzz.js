const fizzBuzz = function fizzBuzz(number) {
    let fizzBuzzText = "";
    
    fizzBuzzText += number % 2 === 0 ? "Fizz" : "";
    fizzBuzzText += number % 3 === 0 ? "Buzz" : "";

    return fizzBuzzText;
}

module.exports = fizzBuzz;