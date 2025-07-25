'use strict';
/*
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function pritAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Meet';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  pritAge();

  return age;
}

const firstName = 'Rahul';
calcAge(1991);
// console.log(age);
// pritAge();

*/

/* -------------------------------- */
// Hoisting and TDZ in Practice
/* -------------------------------- */

/*

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'rahul';
let job = 'student';
const year = 2005;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

console.log(undefined);
if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.y);
 
*/

/* -------------------------------- */
// this keyword practice
/* -------------------------------- */

/*

console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  // console.log(this);
};
calcAge(2000);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  // console.log(this);
};
calcAgeArrow(2005);

const rahul = {
  year: 2005,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};
rahul.calcAge();

const mayra = {
  year: 2022,
};
mayra.calcAge = rahul.calcAge;
mayra.calcAge();

const f = rahul.calcAge;
f();

*/

/* -------------------------------- */
// Regular Functions vs. Arrow Functions
/* -------------------------------- */

/*

// var firstName = 'Mayra';

const rahul = {
  firstName: 'Rahul',
  year: 2005,
  calcAge: function () {
    // console.log(this);
    console.log(2025 - this.year);

    // Solution 01
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 02
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

rahul.greet();
rahul.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);

  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

*/

/* ------------------------------------- */
// Regular Functions vs. Arrow Functions
/* ------------------------------------- */

/*

let age = 20;
let oldAge = age;
age = 21;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Rahul',
  age: 20,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);

*/

/* ---------------------------------- */
// Primitives vs. Objects in Practice
/* ---------------------------------- */

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Merry');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
