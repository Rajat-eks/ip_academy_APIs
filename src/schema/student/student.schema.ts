import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: false })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  collegeName: string;

  @Prop()
  score: string;
}

export type StudentDocument = Student & Document;

export const StudentSchema = SchemaFactory.createForClass(Student);

export const STUDENT_MODEL = Student.name;
