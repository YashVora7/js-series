let myObj = {
    name : "yash",
    age : 20,
}

console.log(typeof myObj); // object

let myArr = ["ele1", "ele2", "ele3"]

console.log(typeof myArr); // object

const myFunc = () =>{
    console.log("Hello World");
}

console.log(typeof myFunc); // function

const id = Symbol("123abc") // Symbol used to define unique value for example id
const id2 = Symbol("123abc")

console.log(typeof id); // symbol
console.log(id == id2); // false



