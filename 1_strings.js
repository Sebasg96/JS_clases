// creacion STRs
const FirstOption = 'simple quotes' //shift + alt + arrows to duplicate line
const SecondOption = "double quotes"
const ThirdOption = `inverted quotes`

//  1. + Concat str
const address = 'calle falsa 123'
const city = 'Springfield'
const FullAddress = 'Your address is ' + address + ', ' + city
console.log(FullAddress)

// 2. template literals like format Python ${} using `` 
//Template literals are enclosed by backtick (`) characters instead of double or single quotes.
//placeholders, which are embedded expressions delimited by a dollar sign and curly braces: ${expression}

const Name = 'Seb'
const country = 'Col'
const presentation = `hi my name is ${Name} and im from ${country}`
console.log(presentation)

//3. concat join()
//Join Method especifies the delimitator character to print an array

const FirstPart = 'Yesterday'
const SecondPart = 'i ate'
const ThirdPart  = 'walnuts'
const Joined = [FirstPart, SecondPart, ThirdPart]

console.log(Joined.join(" "))

//4. concat() Method

const Hobbie1 = 'Weightlifting'
const Hobbie2 = 'Rope Jumping'
const Hobbie3 = 'Reading'
const Hobbie4 = 'Bolirana'

const hobbies = 'My Hobbies are: '.concat(Hobbie1,", ",Hobbie2, ", ", Hobbie3, ', ', Hobbie4)
console.log(hobbies)

//Long Strings \n

const LongText = "A JavaScript identifier usually starts with\n a letter, underscore (_), or dollar sign ($).\n Subsequent characters can also be digits (0 – 9).\n Because JavaScript is case sensitive, letters include the characters\n A through Z (uppercase) as well as a through z (lowercase)."
console.log(LongText)

//long string with backtick (`) characters instead of \n

const LongText2 = `A JavaScript identifier usually starts with
a letter, underscore (_), or dollar sign ($). 
Subsequent characters can also be digits (0 – 9).
Because JavaScript is case sensitive, letters include 
the characters A through Z (uppercase) as well as a through z (lowercase).`
console.log(LongText2)