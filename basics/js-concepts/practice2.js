// "rest" parameter (...)
function getAllow(...allow){
    console.log(allow)
    console.log(allow.length)
}

getAllow(10000);
getAllow(10000, 5000);
getAllow(10000, 5000, 2000);

// default parameter -- must be the last parameter
function getSalary(salary, monthDays = 31, workingDays = monthDays){
    let calculatedSalary = (salary / monthDays) * workingDays;
    console.log(calculatedSalary);
}

// getSalary(28, 50000, 31);
// getSalary(31, 70000, 31);
// getSalary(31, 60000, 31);
// getSalary(30, 40000, 31);

getSalary(50000);
getSalary(50000, 30);
getSalary(50000, 31, 30);