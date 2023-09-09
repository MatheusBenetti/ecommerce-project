import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'username is required' })
  username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'password is required' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'confirm password is required' })
  confirmPassword: string;
}
