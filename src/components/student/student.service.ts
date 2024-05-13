import { Injectable } from '@nestjs/common';
import { StudentRegisterDTO } from './dto/studentRegister.dto';
import { InjectModel } from '@nestjs/mongoose';
import { STUDENT_MODEL, StudentDocument } from 'src/schema/student';
import { Model } from 'mongoose';
import { CrudService } from 'src/base/crud.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class StudentService extends CrudService {
  constructor(
    @InjectModel(STUDENT_MODEL)
    private readonly studentModel: Model<StudentDocument>,
    private jwtService: JwtService,
  ) {
    super(studentModel);
  }

  async registerStudentForExam(
    studentRegisterDTO: StudentRegisterDTO,
  ): Promise<any> {
    try {
      const { email } = studentRegisterDTO;
      const existingUser = await this.studentModel.findOne({ email: email });
      if (existingUser) {
        return {
          status: false,
          message: 'Student already registered!',
        };
      }

      const result = await this.studentModel.create(studentRegisterDTO);

      const payload = {
        sub: result._id,
        userName: result?.name,
        userEmail: result?.email,
      };
      const access_token = await this.jwtService.signAsync(payload);
      return {
        status: true,
        access_token,
        data: { name: result?.name },
        message: 'Student Register Successfully!',
      };
    } catch (error) {
      throw error;
    }
  }
}
