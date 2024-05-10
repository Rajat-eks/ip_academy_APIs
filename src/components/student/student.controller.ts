import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentRegisterDTO } from './dto/studentRegister.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  registerStudentForExam(@Body() studentRegisterDTO: StudentRegisterDTO): any {
    return this.studentService.registerStudentForExam(studentRegisterDTO);
  }
}
