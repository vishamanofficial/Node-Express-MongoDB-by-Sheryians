// Fundamental of js 
// array and object in js 
// function  return 
// async js 
// for each, map, filter, find, indexof

var arr = [1,2,3,4,];
// forEach 
var arr2 = arr.forEach((val)=>{
    return val + " hello"
});
console.log(arr2);
// map 
var arr3 = arr.map((val)=>{
    return val + " hello"
});
console.log(arr3);
// find
var arr4 = arr.find((val)=>{
    if (val === 2) return val;
});
console.log(arr4);
// indexOf 
var arr5 = arr.indexOf(2)
console.log(arr5);


// obejcts 
var obj = {
    name: "John",
    age: 30,
    city: "New York"
};

// function 
function abcd(){
    return 12;
}