import { Module } from '@nestjs/common';
import { GlobalLoggerService } from 'src/logger/logger.service';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';

@Module({
    imports: [],
    controllers: [SalaryController],
    providers: [SalaryService, GlobalLoggerService],
})
export class SalaryModule {}