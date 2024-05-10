import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret:'secrets of IP ACEDEMY' ,
          signOptions: {
            expiresIn: '24h',
          },
        };
      },
      global: true,
    }),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
