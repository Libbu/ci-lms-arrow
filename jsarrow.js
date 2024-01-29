//Arrow function with parameters

const addTwoNumbers = (a,b)  => {
    return a + b;
}

let sum = addTwoNumbers (3,5);
console.log(sum);

// single line arrow function with parameters - implicit return syntax
//const addTwoNumbers2 = (a, b) => (a + b); also valid

const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(4,6);
console.log(sum2);

//implicit returns

const saySomething = message => console.log(message);
saySomething('Hello There!!');

const sayHello = () => console.log('hello');
sayHello();

//returning multiple lines of code

const returnMultipleLines = () => (
    `<p>
    This is a mulitline string
    </p>`
);

console.log(returnMultipleLines);




