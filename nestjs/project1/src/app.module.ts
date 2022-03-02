import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { GlobalLoggerService } from './logger/logger.service';
import { SalaryModule } from './salary/salary.module';
import { StudentService } from './students.service';
import { UserService } from './user.service';

@Module({
  imports: [ClientModule, EmployeeModule, SalaryModule],
  controllers: [AppController],
  providers: [AppService, UserService, StudentService],
})
export class AppModule {}
