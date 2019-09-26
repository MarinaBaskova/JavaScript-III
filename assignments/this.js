/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

the keyword "this" is a reserved keyword in JS and its value is determined at execution.
It is either set using:
* 1. Global context - when set in the global context in a function, it is either the global object (window if in the browser) or undefined (if we are using strict mode)

* 2. Implicit (automatic) binding (Object binding) - whe the keyword 'this is inside of a declared object the value of the keyword 'this' will always be the closest parent object.

* 3. Explicit (we control this) binding (Function binding) - to explicitly set the value of the keyword 'this, we use call, apply, or bind, which are build in methods on a function for chaging poiter of the 'this' keyword.

* 4. The New keyword binding - we use the 'new' keyword to set the context of 'this' to the newly created object 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this); 

function whatIsThis () {
    return this;
}
console.log(whatIsThis());

// Principle 2

// code example for Implicit Binding

let person = {
    firstName: "Tim",
    sayHi: function(){
        return `Hi ${this.firstName}`;
    }
};
console.log(person.sayHi());

// Principle 3

// code example for New Binding

function Car (model) {
    this.model = model;
    this.printModel = function() {
        console.log(`This car model is ${this.model}`);
    };
}

const ford = new Car('explorer');
console.log(ford);
console.log(ford.printModel());


// Principle 4

// code example for Explicit Binding

let anotherPerson = {
    firstName: "Jimmy",
    sayHi: function(){
        return `Hi ${this.firstName}`;
    }
};

const hobbies = ["reading books", "code", "hikking"];

function listAllhobbies (hobby1, hobby2, hobby3) {
  return `Hello! my name is: ${this.firstName} and my hobbies are: ${hobby1}, ${hobby2}, ${hobby3}`;
}
//call
console.log(listAllhobbies.call(anotherPerson, hobbies));
//spread operator
console.log(listAllhobbies.call(anotherPerson, ...hobbies));
//apply
console.log(listAllhobbies.apply(anotherPerson, hobbies));
//bind
const printLater= listAllhobbies.bind(anotherPerson, ...hobbies);
console.log(printLater());