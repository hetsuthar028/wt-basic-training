import { Module } from '@nestjs/common';
import { GlobalLoggerService } from 'src/logger/logger.service';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
    imports: [],
    controllers: [EmployeeController],
    providers: [EmployeeService, GlobalLoggerService],
})
export class EmployeeModule {}