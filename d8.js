"use strict";
let car = 'subaru';
// True Tests
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // True
console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota'); // True
console.log("Is car.includes('sub')? I predict True.");
console.log(car.includes('sub')); // True
// False Tests
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False
console.log("Is car === 'toyota'? I predict False.");
console.log(car === 'toyota'); // False
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False
console.log("Is car.includes('toy')? I predict False.");
console.log(car.includes('toy')); // False
