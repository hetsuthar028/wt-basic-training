import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { StudentService } from './students.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService, private readonly studentService: StudentService) {}

  @Get()
  getHello(): string {
    return this.appService.getFullName();
  }

  @Get('/details')
  getMyDetails(): string{
    return this.appService.getFullName() + " Age: " + this.appService.getAge();
  }

  @Get('/nest')
  getNestInfo(): {} {
    return this.userService.getMyDetails();
  }

  @Get('add/:studentName')
  addStudent(@Param('studentName') studentName: string): string{
    return this.studentService.addNewStudent(studentName);
  }

  @Get('edit/:studentName')
  editStudent(@Param('studentName') studentName: string): string {
    return this.studentService.editStudent(studentName);
  }

  @Get('delete/:studentName')
  deleteStudent(@Param('studentName') studentName: string): string{
    return this.studentService.deleteStudent(studentName);
  }

  @Get('/get/all')
  getAllStudents(): string[]{
    return this.studentService.getAllStudents();
  }
}
