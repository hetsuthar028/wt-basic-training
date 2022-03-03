import { Injectable } from "@nestjs/common";
import { EmployeeDto } from "./dto/employee.dto";

@Injectable()
export class EmployeeService {
    constructor(){}

    employees: EmployeeDto[] = [];

    addEmployee(employee: EmployeeDto){
        this.employees.push(employee);
        return employee;
    }

    updateEmployee(id: number, employee: EmployeeDto): string{
        this.employees = this.employees.map((emp) => {
            if(emp.id == id){
                emp = {...emp, ...employee}
            }
            return emp
        });

        return "Employees record updated";
    }

    deleteEmployee(id: number): string{
        this.employees = this.employees.filter((employee) => employee.id !=id);
        return "Employee deleted";
    }

    getAllEmployees(): EmployeeDto[]{
        return this.employees;
    }
}