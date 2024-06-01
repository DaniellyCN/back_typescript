let x:number = 990;

console.log(10);

let firstName : string = "Maria";
let age : number = 30;
const isAdmin : boolean = true;

console.log(typeof firstName);

firstName = "João"

console.log(firstName);

const arrayNumbers : number[] = [1, 2, 3];
console.log(arrayNumbers.length);
console.log(arrayNumbers);
console.log(firstName.toUpperCase);

let myTuple: [number, string, boolean, string[]];
myTuple = [10, "Dani", true, ["hello", "tchau"]];

const user: {name: string, age:number} = {
    name: "Laura",
    age: 85
}

console.log(user);

type myIdType = number | string;

const userId : myIdType = 10;
const productId : myIdType = 98;
const shirId : myIdType = 123;

enum Size {
    P = "pequeno", 
    M = "medio",
    G = "grande"
}

const camisa = {
    name : "Camisa gola V",
    size : Size.G 
};

console.log(camisa);

function sum( a : number, b : number) {
    return a + b
}

function sayHello(name : string) : string {
    return `Hello ${name}`
}

interface MathFunctionParams {
    n1 : number
    n2 : number
}

function sumNumbers (nums : MathFunctionParams) {
    return nums.n1 + nums.n2
}
// tipos genericos
function showArraysItems<T>(arr : T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`)
    })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b"];

showArraysItems(a1);
showArraysItems(a2);

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }
  
  @sealed
  class Person {
    constructor(public name: string) {}
  }
  
  function ValidarEmail(target: any, propertyKey: string) {
    let valorOriginal = target[propertyKey];
  
    const getter = function() {
      return valorOriginal;
    };
  
    const setter = function(valor: string) {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
        valorOriginal = valor;
      } else {
        throw new Error("Email inválido");
      }
    };
  
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  }
  