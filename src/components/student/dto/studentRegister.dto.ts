import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class StudentRegisterDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  collegeName: string;
}
