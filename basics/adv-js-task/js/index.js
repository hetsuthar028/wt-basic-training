// Classes
class Student{
    constructor(id, age, name, marks){
        this.id = id;
        this.age = age;
        this.name = name;
        this.marks = marks;
    }

    getDetails(){
        console.log(`ID: ${this.id}\nName: ${this.name}\nAge: ${this.age}\nMarks: ${this.marks}`);
    }
}

let john = new Student(101, 21, "John", 91);
john.getDetails()

// Objects 
let obj1 = {
    a: 123,
}
// Object.assign() - For copying the objects (by values)
let obj2 = Object.assign({}, obj1);
console.log("Object 1", obj1);
console.log("Object 2", obj2);

// Object.is() - For comparing objects (bydefault - by reference)
let obj3 = obj1;
console.log("Obj1 | Obj2 = ", Object.is(obj1, obj2));
console.log("Obj1 | Obj3 = ", Object.is(obj1, obj3));

// Spread operator
let tempArr = [1, 2, 3, 4, 5, 6, 7];
let modifiedArr = [0, ...tempArr];
console.log("Original Array: ", tempArr);
console.log("Modified Array: ", modifiedArr, "(Using ... operator)");

let obj4 = {
    ...obj1,
    b: 456,
}
console.log("Modified object (from obj1) = ", obj4);

console.log("Spread on string", ['A', ...'BCDE']);

// Tagged literals
function show(str, ...values){
    console.log("Init - ", str);
    console.log("Rest parameters - ", values);
}
show`${1}${2}${3}`;
show`Something${1}${2}${3}${4}Here`

// Task - Performing Inheritance and overriding
class A{
    speak(){
        console.log("Speaking...")
    }
}

class B extends A{
    constructor(){
        super();
    }

    listen(){
        console.log("Listening...")
    }
}

let b1 = new B();
b1.speak();
b1.listen();

// Example for Inheritance, Overriding and Calling a parent method from child
class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getDetails(){
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}`);
    }
}

class Employee extends Person{
    constructor(name, age, gender, designation, salary){
        super(name, age, gender);
        this.designation = designation;
        this.salary = salary;
    }

    getDetails(){
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}\nDesignation: ${this.designation}\nSalary: ${this.salary}`);
    }

    getPersonalDetailsOnly(){
        super.getDetails();
    }
}

let newEmployee = new Employee("Het", 21, "Male", "SDE Intern", 5);
newEmployee.getDetails();
newEmployee.getPersonalDetailsOnly();