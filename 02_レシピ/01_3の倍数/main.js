//const number = 24
const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkiFunction(100)

const FizzBuzz = function (number) {
  for (let n = 1; n <= number; n++) {
    if ((n % 3 === 0) & (n % 5 === 0)) {
      console.log("FizzBuzz")
    }
    if (n % 3 === 0) {
      console.log("Fizz")
    }
    if (n % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}
FizzBuzz(100)
