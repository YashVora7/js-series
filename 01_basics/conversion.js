'use strict' // use to state that code is in js newer version

console.log("\nconversion into Number");

let score = "33";
console.log(typeof score);
console.log(score);
console.log(typeof Number(score));

console.log("\nconversion into String");

let score1 = 33;
console.log(typeof score1);
console.log(String(score1));
console.log(typeof String(score1));

console.log("\nconversion into Boolean");

let Score = null;
console.log(typeof Score);
console.log(Boolean(Score));
console.log(typeof Boolean(Score));

console.log("\nconversion into Number for check boolean value");

let isLoggedIn = true
console.log(typeof isLoggedIn);
console.log(Number(isLoggedIn));
console.log(typeof Number(isLoggedIn));

console.log("\nconversion into Boolean for check boolean value");

let isLoggedIn2 = 1
console.log(typeof isLoggedIn2);
console.log(Boolean(isLoggedIn2));
console.log(typeof Boolean(isLoggedIn2));


// OPERATIONS 

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log("1" + 2 + 3); // 123
console.log(1 + 2 + "3"); // 33
console.log(2**4); // 2 the power of 4 = 16

let counter = 1;
console.log(counter++); // 1
console.log(counter); // 2
console.log(++counter); // 3
console.log(counter); // 3
