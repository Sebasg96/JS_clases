/* Functions camelcase exampleFunctionObject
palabra reservada function, nombre de la funcion, parametros, cuerpo de la funcion
llamando la funcion se le pasan argumentos
*/ //declaracion de funcion

function calculateDiscountedPrice(price,discountPercentage){
    const discount = price * discountPercentage /100
    const priceWithDiscount = price - discount
    return priceWithDiscount
}

console.log(calculateDiscountedPrice(100,20))


//2. Functions vs Methods
//capacidades de funciones y otros objetos

//2.1 pasar funciones como argumentos  -> callback
function test(){}
function testB(test){}

//2.2 retornar funciones
function returnFunction(){
    function toBeReturned(){}
    return toBeReturned
}

//2.3 asignar funciones a variables -> expresion de funcion
//  seria igual que function x(){}
const x = function() {}

//tener propiedades y methods
function a (){}
const obj = {}
a.call(obj) //funciton.xxxx() despiega los methods

//funciones anidadas -> Nested functions

function a() { 
    function b() {
         function c() {

        } 
    } 
} 

// almacenar funciones detro de objetos (methods)

const rocket = {
    name : 'Apollo 9',
    launchRocket : function launchRocket(){
        console.log('Fire')
    },
    location : 'Area 51'
}

rocket.launchRocket()