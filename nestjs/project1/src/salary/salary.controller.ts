import { Body, Controller, Get, Post } from "@nestjs/common";
import { GlobalLoggerService } from "src/logger/logger.service";
import { SalaryDto } from "./dto/salary.dto";
import { SalaryService } from "./salary.service";

@Controller('salary')
export class SalaryController {
    constructor(private readonly salaryService: SalaryService, private readonly loggerService: GlobalLoggerService){}

    @Get()
    helloWorld(): string {
        return this.salaryService.sayHello();
    }

    @Post('calculate')
    calculateSalary(@Body() salary: SalaryDto): number {
        this.loggerService.logAction(salaryActions.CALCULATE, salaryActions.MODULE_NAME);
        return this.salaryService.calculateSalary(salary);
    }
}

enum salaryActions {
    CALCULATE = "CALCULATE SALARY",
    MODULE_NAME = "SALARY"
}