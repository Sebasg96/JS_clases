/* funciones puras
Qué nos puede causar side effects:

Modificar variables globales.
Modificar parámetros.
Solicitudes HTTP.
Impresiones de mensajes en pantalla o consola.
Manipulación del DOM (Document Obect Model).
Obtener la hora actual.*/

function funcionPura(a,b,c,){
    return a+b+c
}

//2. Funcion impura (produce side efects)
function funcionPura(a,b,c,){
    console.log('A')
    return a+b+c
}

let total = 0
function sumTotal(x){
    total += x
    console.log(total)
}
