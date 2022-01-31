// destructuring an Array
let a = [1, 2, 3];
let [b, c, d] = a;
console.log(b, c, d)


// destructuring the Object
let myObj = {empId: 101, empName: 'Joy', empSalary: 50000};
console.log(myObj);
let {empId, empName, empSalary} = myObj;
console.log(empId, empName, empSalary);