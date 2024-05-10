import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule, MailerOptions } from '@nestjs-modules/mailer';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        ({
          transport: {
            host: configService.get('MAIL.HOST'),
            port: configService.get('MAIL.PORT'),
            secure: false,
            auth: {
              user: configService.get('MAIL.USER'),
              pass: configService.get('MAIL.PASS'),
            },
          },
          defaults: {
            from: '"nest-modules" <events@globallegalassociation.org>',
          },
          template: {
            dir: process.cwd() + '/src/components/mail/template/',
            adapter: new HandlebarsAdapter(),
            options: {
              strict: false,
            },
          },
        }) as MailerOptions,
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
