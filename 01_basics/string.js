let stringData = "My Name is Yash-Vora"

console.log(stringData.toUpperCase());
console.log(stringData.charAt(3));
console.log(stringData.indexOf('M'));
console.log(stringData.substring(11,16));

let stringData2 = "   Yash   " // Here are Some Spaces
console.log(stringData2);
console.log(stringData2.trim()); // This will remove all the spaces from the string

let url = "https://yashvora.com/user%20yash"
console.log(url.replace("%20","-"));
console.log(url.includes("yash")); // checks that this data includes in values


console.log(stringData.split("-")); // split(separate) data on basis of - and return array
