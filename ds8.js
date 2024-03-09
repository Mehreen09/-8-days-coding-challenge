"use strict";
let car = 'subaru';
let age = 5;
let isAutomatic = true;
let color = 'blue';
let price = 20000;
// True Tests
console.log("Is car == 'subaru' and age > 0? I predict True.");
console.log(car == 'subaru' && age > 0); // True
console.log("Is car == 'subaru' or age == 5? I predict True.");
console.log(car == 'subaru' || age == 5); // True
console.log("Is age >= 5 and isAutomatic == true? I predict True.");
console.log(age >= 5 && isAutomatic == true); // True
console.log("Is color != 'red' or price <= 20000? I predict True.");
console.log(color != 'red' || price <= 20000); // True
console.log("Is age * 2 == 10? I predict True.");
console.log(age * 2 == 10); // True
// False Tests
console.log("Is car == 'toyota' and age > 0? I predict False.");
console.log(car == 'toyota' && age > 0); // False
console.log("Is car == 'toyota' or age == 10? I predict False.");
console.log(car == 'toyota' || age == 10); // False
console.log("Is age < 5 and isAutomatic == true? I predict False.");
console.log(age < 5 && isAutomatic == true); // False
console.log("Is color != 'blue' or price >= 25000? I predict False.");
console.log(color != 'blue' || price >= 25000); // False
console.log("Is age * 2 != 10? I predict False.");
console.log(age * 2 != 10); // False
