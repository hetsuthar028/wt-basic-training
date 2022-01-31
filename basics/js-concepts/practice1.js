// Understanding "this" and "new" keyword
function getData(a, b){
    this.a = a;
    this.b = b;
}

let s = getData(10, 12);
console.log(s)
console.log(global)

function getData2(a, b){
    this.a = a;
    this.b = b;
}

let s2 = new getData2(10, 12);
console.log(s2)


// prototype -- allows us to define the properties which are available with the main object
function Emp(id, name){
    this.id = id;
    this.name = name;
}
Emp.prototype.companyName = "ABC Pvt Ltd."
Emp.comp2 = "abc";
let emp1 = new Emp(101, "Joy");
let emp2 = new Emp(102, "Jay");
console.log(emp1.companyName);
console.log(emp2.companyName);

console.log(emp1.comp2);
console.log(Emp.comp2);



