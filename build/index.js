"use strict";
var a = 21;
let b = "hola mundo";
a.toFixed(2);
b.length;
//@ts-ignore
b = true;
b = [1, 2, true, "hola"];
/*

    let c: boolean = true
    c = 45

*/
const variable = true;
function suma(a, b) {
    if (typeof b !== "number")
        return "hello";
    return a + b;
}
suma(10, 5); // 15
suma("10", 5); // "105"
let minumero = 5;
let miArrayDeNumeros = [1, 2, 3, 4, 5];
miArrayDeNumeros.push(12);
miArrayDeNumeros.push("Hola");
let miArrayDeStrings = [];
miArrayDeStrings[0] = "hola";
miArrayDeStrings.push(true);
