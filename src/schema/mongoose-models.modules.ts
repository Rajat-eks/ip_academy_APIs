import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { STUDENT_MODEL, StudentSchema } from './student';

const MODELS = [
  { name: STUDENT_MODEL, schema: StudentSchema }
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}
