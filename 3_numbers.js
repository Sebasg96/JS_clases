//1. integer - entero
const TestInteger = 42
const TestFloat = 42.432 //float in python decimal

console.log(typeof TestInteger, typeof TestFloat)

//2. Scientific notation

const Scientific = 5e3

//3. infinites or NaN (not a number)

const TestInfinity = Infinity
const NotANumber = NaN
console.log(typeof TestInfinity, typeof NotANumber)

//1. Arithmetic operations 
const sum = 6 + 9
const subtraction = 9 - 6
const multiplication = 6 * 9
const division = 9 / 6

//2. remainder (Modulo) and Exponentiation

const remainder = 15 % 8
const exponentiation = 3 ** 3 

//3. precision
const result = 0.1 + 0.2
console.log(result)
console.log(result.toFixed(1)) //method

// 4. advance operations

const SqrRoot = Math.sqrt(4)
const AbsoluteValue = Math.abs(-8)
const Random = Math.random()

console.log(SqrRoot,AbsoluteValue,Random)


