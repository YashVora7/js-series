// Stack (Used in Primitive Datatypes) and Heap (Used in Non-primitive Datatypes)

//STACK - only provides copy, don't change original value as in example myAnotherName can't change myName. it makes only copy
let myName = "Yash"

let myAnotherName = myName // myName Assign to myAnotherName

myAnotherName = "YashV" // Change Name Yash to YashV

console.log(myAnotherName); // YashV
console.log(myName); // Yash

//HEAP - it provides reference, change in original value look at example
let myObj = {
    name: "Yash",
    email: "yash@mail.com",
    age: 20,
}

let myAnotherObj = myObj // myObj Assign to myAnotherObj
myAnotherObj.email = "yash@gmail.com" // change value of myAnotherObj email 

console.log(myAnotherObj.email); // yash@gmail.com
console.log(myObj.email); // yash@gmail.com

