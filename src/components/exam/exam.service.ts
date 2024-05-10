import { Injectable } from '@nestjs/common';
import { SubmitExamDTO } from './dto/submit-exam.dto';
import { CrudService } from 'src/base/crud.service';
import { InjectModel } from '@nestjs/mongoose';
import { STUDENT_MODEL, StudentDocument } from 'src/schema/student';
import { JwtService } from '@nestjs/jwt';
import mongoose, { Model } from 'mongoose';
import { MailService } from '../mail/mail.service';

@Injectable()
export class ExamService extends CrudService {
  constructor(
    @InjectModel(STUDENT_MODEL)
    private readonly studentModel: Model<StudentDocument>,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {
    super(studentModel);
  }
  async submitExam(submitExamDTO: SubmitExamDTO, user: any): Promise<any> {
    console.log('destructure user', user);
    const { score, result } = submitExamDTO;
    const student = this.studentModel.findOneAndUpdate(
      { _id: user?.sub },
      {
        $set: {
          score: score,
        },
      },
      { new: true },
    );
    await this.mailService.sendMail(
      user?.userEmail,
      user?.userName,
      result,
      score,
      'student?.college',
    );
    return {
      status: true,
      message: 'Save Datail!',
    };
  }
}
