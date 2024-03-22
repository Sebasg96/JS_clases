//funcion normal
const greeting = function(name){
    return `Hi, my name is ${name}`
}

//arrow function - arrow after params replace the the KW function
//explicit return using KW return
const arrowGreeting = (name) => {
    return `Hi, my name is ${name}`
}

//arrow function - implicit return replace return by usign a single code line

const arrowGreetingImplicit = name => `Hi, my name is ${name}`

//if using a single param you can avoid parenthesis, if using more than one param use parenthesis
const arrowGreetingImplicitTwoParams = (name,country) => `Hi, my name is ${name} and i'm from ${country} `


//lexical binding
//arrow function cannot use this context 
const fictionCar = {
    brand : "BMW",
    messageWithRegularFunction: function(carType){
        console.log(`${this.brand} is a ${carType}`)
    },
    messageWithArrowFunction: carType  =>{
    console.log(`${this.brand} is a ${carType}`)
}
}

fictionCar.messageWithRegularFunction('truck')
//arrow function cannot use context this. return undefined
fictionCar.messageWithArrowFunction('Bus')
