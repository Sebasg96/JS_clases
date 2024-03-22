//apuntan al mismo espacio en memoria
let fruits = {orange : '💲​'}

let vegetables = fruits

vegetables.orange = '🤑​'

console.log(fruits)

let clothes = {
    shirt : 'xl',
    pants : 32
}
console.log(clothes)
clothes.shoes = 42
console.log(clothes)