let arr = [
    {id: 101, name: 'Joy', training: 'ReactJS'},
    {id: 102, name: 'Aman', training: 'ReactJS'},
    {id: 103, name: 'Jayesh', training: 'ReactJS'},
    {id: 104, name: 'Dhruvesh', training: 'JS'},
    {id: 105, name: 'Mahesh', training: 'ReactJS'},
];

// forEach()
let result = arr.forEach((elem, idx) => {
    // console.log("Index", idx, "Value", elem)
})
console.log("forEach() Result: ", result)

// map()
let resultMap = arr.map((elem, idx) => {
    return elem.id + " "+ elem.name
})
console.log("map() Result: ", resultMap)

// filter()
let filterResult = arr.filter((elem, idx) => {
    return elem.id == 101;
})
console.log("filter() Result:", filterResult)

// every()
let everyResult = arr.every((elem, idx) => {
    return elem.training === "ReactJS"
})
console.log("every() Result:", everyResult);

// some()
let someResult = arr.some((elem, idx) => {
    return elem.training === "JS";
})
console.log("some() Result:", someResult);