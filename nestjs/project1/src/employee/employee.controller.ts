import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { GlobalLoggerService } from "src/logger/logger.service";
import { EmployeeDto } from "./dto/employee.dto";
import { EmployeeService } from "./employee.service";


@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService, private readonly loggerService: GlobalLoggerService){}

    @Post('add')
    addEmployee(@Body() employee: EmployeeDto): EmployeeDto{
        this.loggerService.logAction('Add Employee', 'Employee');
        return this.employeeService.addEmployee(employee);
    }

    @Put('update/:employeeId')
    updateEmployee(@Param('employeeId') employeeId: number, @Body() employeeData: EmployeeDto): string{
        this.loggerService.logAction('Update Employee', 'Employee');
        return this.employeeService.updateEmployee(employeeId, employeeData);
    }

    @Delete('delete/:employeeId')
    deleteEmployee(@Param('employeeId') employeeId: number): string {
        this.loggerService.logAction('Delete Employee', 'Employee');
        return this.employeeService.deleteEmployee(employeeId);
    }

    @Get('all')
    getAllEmployees(): EmployeeDto[]{
        this.loggerService.logAction('Get All Employees', 'Employee');
        return this.employeeService.getAllEmployees();
    }
}