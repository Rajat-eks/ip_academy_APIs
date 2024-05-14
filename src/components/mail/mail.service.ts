import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  sendMail(
    studentEmail: string,
    studentName: string,
    result: any,
    score: any,
    college: string,
  ): any {
    this.mailerService
      .sendMail({
        to: 'ipacademy@effectualservices.com',
        // to: 'rajat.verma@effectualservices.in',
        from: 'eksuser@effectualservices.in',
        subject: 'IP Academy Result',
        template: 'examComplete',
        context: {
          studentName: studentName,
          studentEmail: studentEmail,
          results: result,
          score: score,
          college: college,
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
