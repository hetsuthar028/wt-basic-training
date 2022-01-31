// classes
class Employee {
    constructor(id, name, salary, designation){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.designation = designation;
    }

    addEmployee(){
        console.log("Employee Added");
    }

    editEmployee(){
        console.log("Employee Edited");
    }

    deleteEmployee(){
        console.log("Employee Deleted")
    }

    getData(){
        console.log(this.id, this.name, this.salary, this.designation);
    }
}

let emp1 = new Employee(101, "Joy", 500000, "SDE");
emp1.addEmployee();
emp1.editEmployee();
emp1.deleteEmployee();
emp1.getData();

