"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 990;
console.log(10);
let firstName = "Maria";
let age = 30;
const isAdmin = true;
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
const arrayNumbers = [1, 2, 3];
console.log(arrayNumbers.length);
console.log(arrayNumbers);
console.log(firstName.toUpperCase);
let myTuple;
myTuple = [10, "Dani", true, ["hello", "tchau"]];
const user = {
    name: "Laura",
    age: 85
};
console.log(user);
const userId = 10;
const productId = 98;
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "medio";
    Size["G"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
function sum(a, b) {
    return a + b;
}
function sayHello(name) {
    return `Hello ${name}`;
}
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
// tipos genericos
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b"];
showArraysItems(a1);
showArraysItems(a2);
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    sealed
], Person);
function ValidarEmail(target, propertyKey) {
    let valorOriginal = target[propertyKey];
    const getter = function () {
        return valorOriginal;
    };
    const setter = function (valor) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
            valorOriginal = valor;
        }
        else {
            throw new Error("Email inválido");
        }
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
}
