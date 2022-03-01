import { Injectable } from "@nestjs/common";
import { SalaryDto } from "./dto/salary.dto";

@Injectable()
export class SalaryService {

    sayHello(): string{
        return "Hey there!";
    }

    calculateSalary(salaryData: SalaryDto): number {
        return salaryData.monthlySalary * 12 * (salaryData.workingDays/20);
    }
}