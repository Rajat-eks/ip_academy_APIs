import { registerAs } from '@nestjs/config';

export const MAIL_SERVICE = registerAs('MAIL', () => {
  return {
    HOST: process.env['MAIL_HOST'],
    PORT: process.env['MAIL_PORT'],
    USER: process.env['MAIL_USER'],
    PASS: process.env['MAIL_PASS'],
  };
});
