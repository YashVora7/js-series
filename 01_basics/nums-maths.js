let num = 400

console.log(num.toString().length);
console.log(num.toFixed(2)); // 400.00

let otherNum = 133.89852

console.log(otherNum.toPrecision(3)); // 134, if pass 4 in params it returns 133.9

let oneMillion = 1000000
console.log(oneMillion.toLocaleString()); // 10,00,000

// MATH

console.log(Math);
console.log(Math.round(4.5)); //5, if 4.4 returns 4
console.log(Math.ceil(4.2)); // 5, if 4 has point value than show its next number. it is part of round
console.log(Math.floor(4.8)); // 4, if 4 has point value than show its present number. it is part of round
console.log(Math.random()); // it returns number in decimal between 0 and 1 ex. 0.9589..
console.log(Math.floor(Math.random()*100000)); // now it returns 6 digit value because of multiply and also don't return decimal value because of floor



