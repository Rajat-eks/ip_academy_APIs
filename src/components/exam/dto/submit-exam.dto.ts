import { IsNotEmpty, IsString } from 'class-validator';

export class SubmitExamDTO {
  @IsString()
  @IsNotEmpty()
  score: string;

  @IsNotEmpty()
  result:any
}
