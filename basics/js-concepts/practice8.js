// Object.assign()
let emp1 = {id: 123, name: 'Rahul'};
let emp1Education = {ssc: '89', hsc: '81'};

emp1 = Object.assign(emp1, emp1Education);
console.log(emp1)

// Object.is()
let obj1 = {a: 12};
let obj2 = {a: 12};
let obj3 = obj1;
let obj4 = {...obj1};
console.log("Obj1 is Obj2", Object.is(obj1, obj2));
console.log("Obj1 is Obj3", Object.is(obj1, obj3));
console.log("Obj1 is Obj4", Object.is(obj1, obj4));