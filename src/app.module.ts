import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamModule } from './components/exam/exam.module';
import { StudentModule } from './components/student/student.module';
import { MailModule } from './components/mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModelsModule } from './schema/mongoose-models.modules';
import { DatabaseModule } from './infra/mongoose/mongoose.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: configuration,
    }),
    DatabaseModule,
    StudentModule,
    ExamModule,
    MailModule,
    MongooseModelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
