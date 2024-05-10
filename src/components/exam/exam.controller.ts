import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ExamService } from './exam.service';
import { SubmitExamDTO } from './dto/submit-exam.dto';
import { AuthGuard } from 'src/Gaurds/authantication.gaurd';

@UseGuards(AuthGuard)
@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}
  @Post('submit')
  @HttpCode(HttpStatus.CREATED)
  submitExam(@Body() submitExamDTO: SubmitExamDTO, @Req() { user }: any): any {
    return this.examService.submitExam(submitExamDTO, user);
  }
}
