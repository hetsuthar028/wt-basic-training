import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { GlobalLoggerService } from "src/logger/logger.service";
import { EmployeeDto } from "./dto/employee.dto";
import { EmployeeService } from "./employee.service";



@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService, private readonly loggerService: GlobalLoggerService){}

    @Post('add')
    addEmployee(@Body() employee: EmployeeDto): EmployeeDto{
        this.loggerService.logAction(EmployeeActions.ADD, EmployeeActions.MODULE_NAME);
        return this.employeeService.addEmployee(employee);
    }

    @Put('update/:employeeId')
    updateEmployee(@Param('employeeId') employeeId: number, @Body() employeeData: EmployeeDto): string{
        this.loggerService.logAction(EmployeeActions.UPDATE, EmployeeActions.MODULE_NAME);
        return this.employeeService.updateEmployee(employeeId, employeeData);
    }

    @Delete('delete/:employeeId')
    deleteEmployee(@Param('employeeId') employeeId: number): string {
        this.loggerService.logAction(EmployeeActions.DELETE, EmployeeActions.MODULE_NAME);
        return this.employeeService.deleteEmployee(employeeId);
    }

    @Get('all')
    getAllEmployees(): EmployeeDto[]{
        this.loggerService.logAction(EmployeeActions.LIST, EmployeeActions.MODULE_NAME);
        return this.employeeService.getAllEmployees();
    }
}

enum EmployeeActions {
    LIST = "LIST EMPLOYEE",
    ADD = "ADD EMPLOYEE",
    UPDATE = "UPDATE EMPLOYEE",
    DELETE = "DELETE EMPLOYEE",
    MODULE_NAME = "EMPLOYEE"
}