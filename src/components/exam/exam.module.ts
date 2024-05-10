import { Module } from '@nestjs/common';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { MailService } from '../mail/mail.service';

@Module({
  imports: [],
  controllers: [ExamController],
  providers: [ExamService, MailService],
})
export class ExamModule {}
