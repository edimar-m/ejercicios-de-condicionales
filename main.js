///////////Ejercicios de condicionales y operadores lógicos

/////////////////Ejercicio 1. puedeVerPelicula
//Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
/*
const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if (edad >= 15 || tieneAutorizacion == true) { 
        return true;}
    else{
        return false;
    }
} 

console.log(puedeVerPelicula(12, false)) // false
console.log(puedeVerPelicula(12, true))  // true
console.log(puedeVerPelicula(16, false)) // true
console.log(puedeVerPelicula(18, true))  // true

*/

/////////////////Ejercicio 2. estaEnRango(valor, minimo, maximo)
//Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango).
/*
const estaEnRango = (valor, minimo, maximo) => {
    if ( valor >= minimo && valor <= maximo) {
        return true;
    } else {
        return false;
    }
}

console.log(estaEnRango(3, 1, 10))   // true
console.log(estaEnRango(1, 1, 10))  // true
console.log(estaEnRango(10, 1, 10))  // true
console.log(estaEnRango(12, 1, 10))  // false
console.log(estaEnRango(-3, 1, 10))  // false
 */
/////////////////Ejercicio 3.puedeAvanzar(colorSemaforo)
// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido.
/*
const puedeAvanzar = (color) => {
    if (color === 'verde') {
        return true;
    } else if (color === 'amarillo' || color === 'rojo') {
        return false;
    } else {
        return ('Error: color de semáforo inválido')
    }
} 

console.log(puedeAvanzar('verde'))   // true
console.log(puedeAvanzar('amarillo'))  // false
console.log(puedeAvanzar('rojo'))      // false
console.log(puedeAvanzar('lila'))      // 'Error: color de semáforo inválido'
*/

/////////////////Ejercicio 4. esVocal(letra)
//Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.
/*
const esVocal = (letra) => {
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra ==='o' || letra ==='u') {
        return true;
    } else {
        return false;
    }
}

console.log(esVocal('a')) // true
console.log(esVocal('n'))// false
*/

/////////////////Ejercicio 5.esConsonante(letra)
//Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es.
/*
const esVocal = (letra) => {
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra ==='o' || letra ==='u') {
        return false;
    } else {
        return true;
    }
}

console.log(esVocal('a')) // false
console.log(esVocal('n'))// true
*/

/////////////////Ejercicio 6.esHoraValida(hora)
//Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no.
/*
const esHoraValida = (hora)=>{
    
    const horaDia = hora.split(':');
    if (horaDia [0] >= 00 && horaDia [0] <= 24 && horaDia [1] >= 00 && horaDia [1] <= 59){
        return true;
    } else {
        return false;
    }
}    

console.log(esHoraValida('12:23')) // true
console.log(esHoraValida('12:65')) // false
console.log(esHoraValida('28:05'))// false
console.log(esHoraValida('00:00')) // true

*/

/////////////////Ejercicio 7.puedeRenovarCarnet.
//Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos.
/*
const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests == true && tieneMultasImpagas == false && pagoImpuestos == true) {
        return true;
    } else {
        return false;
    }
}

console.log(puedeRenovarCarnet(true, true, true))   // false
console.log(puedeRenovarCarnet(true, true, false))   // false
console.log(puedeRenovarCarnet(true, false, true))   // true
console.log(puedeRenovarCarnet(true, false, false))  // false
console.log(puedeRenovarCarnet(false, true, true))   // false
console.log(puedeRenovarCarnet(false, true, false))  // false
console.log(puedeRenovarCarnet(false, false, true))  // false
console.log(puedeRenovarCarnet(false, false, false)) // false
*/

/////////////////Ejercicio 8. puedeGraduarse.
//Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.
/*
const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
    if (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada == true){
        return true;
    } else{
        return false;
    }
}

console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))// false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true)) // false
console.log(puedeGraduarse(28, 45, false)) // false
*/

//////////////////ejercicios con condicionales

/////////////////Ejercicio 8.esParOImpar(numero)
//Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar.
/*
const esParOImpar = (numero) => {
    if (numero%2 === 0){
        return ('par');
    } else {
        return ('impar');
    }
}

console.log(esParOImpar(3))  // 'impar'
console.log(esParOImpar(10)) // 'par'
*/

/////////////////Ejercicio 9.esPositivoONegativo(numero)
//Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo.
/*
const esPositivoONegativo = (numero) => {
    if (numero < 0) {
        return ('negativo');
    } else if(numero >= 0){
        return ('positivo');
    }
}

console.log(esPositivoONegativo(3)) // 'positivo'
console.log(esPositivoONegativo(-5)) // 'negativo'
console.log(esPositivoONegativo(0)) // 'positivo'
*/

/////////////////Ejercicio 10. avanzarSemaforo(colorActual).
//Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde.
/*
const avanzarSemaforo = (colorActual) =>{
    if (colorActual === 'verde'){
        return ('amarillo');
    } else if (colorActual === 'amarillo'){
        return ('rojo');
    } else if (colorActual === 'rojo'){
        return ('verde');
    }
}

console.log(avanzarSemaforo('verde'))   // 'amarillo'
console.log(avanzarSemaforo('amarillo'))  // 'rojo'
console.log(avanzarSemaforo('rojo'))      // 'verde'
*/

/////////////////Ejercicio 11. obtenerDiasMes(mes)
// Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes.
/*
const obtenerDiasMes = (mes) => {
    if (mes === 'enero'|| mes === 'marzo'|| mes === 'mayo' || mes === 'julio' || mes === 'agosto' || mes === 'octubre' || mes === 'diciembre'){
        return (31);
    } else if (mes === 'abril' || mes === 'junio' || mes === 'septiembre' || mes === 'noviembre'){
        return (30);
    }else if (mes === 'febrero'){
        return (28);
    }
}

console.log(obtenerDiasMes("diciembre")) // 31
console.log(obtenerDiasMes("febrero"))  // 28
*/

/////////////////Ejercicio 12.obtenerGeneracion(anioNacimiento).
//Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece.
/*
const obtenerGeneracion = (anioNacimiento) => {
    if (anioNacimiento >= 1949 && anioNacimiento <= 1968){
        return ('Baby boomer');
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980){
        return ('Generacion X');
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993){
        return ('Millenials');
    } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010){
        return ('Generación Z')
    } else {
        return ('Está fuera de los valores')
    }
}

console.log(obtenerGeneracion(1952))
console.log(obtenerGeneracion(1972))
console.log(obtenerGeneracion(1981))
console.log(obtenerGeneracion(2005))
*/


/////////////////Ejercicio 13. obtenerSensacion(temperatura)
//Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura.
/*

const obtenerSensacion = (temperatura) => {
    if (temperatura < 0){
        return ('¡Está helado!');
    } else if (temperatura >= 0 && temperatura < 15){  return ('¡Hace frío!');
    } else if (temperatura >= 15 && temperatura < 25){
        return ('Está lindo');
    } else if (temperatura >= 25 && temperatura < 30){
        return ('Hace calor');
    } else if (temperatura >= 30){
        return('¡Hace mucho calor!');
    }
}
console.log(obtenerSensacion(3))
console.log(obtenerSensacion(29))
console.log(obtenerSensacion(22))
console.log(obtenerSensacion(33))
*/

////////////////Ejercicio 15. obtenerNota(puntaje).
//Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado.
/*
const obtenerNota = (puntaje) => {
    const nota = Math.round(puntaje);
       if(nota < 6) {
       return 'Desaprobado';
    } else if(nota >= 6 && nota < 7) {
       return 'Regular';
    } else if(nota >= 7 && nota < 8) {
       return 'Bueno';
    } else if(nota >= 8 && nota < 10) {
       return 'Muy Bueno';
    } else if (nota === 10) {
       return 'Excelente';
    } else if (nota < 0 || nota > 10) {
       return 'Puntaje Inválido';
    };
};
   
console.log(obtenerNota(7))    // "Bueno"
console.log(obtenerNota(9.6))  // "Excelente"
console.log(obtenerNota(10))   // "Excelente"
console.log(obtenerNota(12))   // "Puntaje inválido"
*/

////////////////Ejercicio 16. jugarPiedraPapelTijera(a, b)
//Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate).

const jugarPiedraPapelTijera = (a, b) => {
    
    if(a === 'piedra' && b === 'tijera' || a === 'tijera' && b === 'piedra') {
        return '¡Ganó piedra!';
    } else if(a === 'piedra' && b === 'papel' || a === 'papel' && b === 'piedra') {
        return '¡Ganó papel!';
    } else if(a === 'papel' && b === 'tijera' || a === 'tijera' && b === 'papel') {
        return '¡Ganó tijera!';
    } else {
        return '¡Empate!';
    }
};

console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!


