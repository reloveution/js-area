// моя памятка
let a = 2;
let b = 3;
let c = '2';

console.log("Hello, World!");
console.log("Hello, a+b=" + a+b);
console.log("Hello, a+b=" + (a+b));
console.log("Hello, c+b=" + (c+b))

class Calculator {
    d = 10;

    sum(a, b) {
        return a+b+this.d;
    }
}

let sum = new Calculator().sum(a, b);
console.log("Hello, object world! a+b:" + sum);