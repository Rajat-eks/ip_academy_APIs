import { registerAs } from '@nestjs/config';

export const APP_CONFIG = registerAs('APP', () => {
  return {
    NAME: process.env['APP_NAME'],
    PORT: process.env['APP_PORT'],
  };
});
