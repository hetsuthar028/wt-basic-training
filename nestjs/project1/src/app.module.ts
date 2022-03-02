import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { GlobalLoggerService } from './logger/logger.service';
import { MongoDemoModule } from './mongodemo/mongodemo.module';
import { SalaryModule } from './salary/salary.module';
import { StudentService } from './students.service';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/nestjs-training'), MongoDemoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
