import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserInput {
  @ApiProperty({
    description: '이메일',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: '비밀번호',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: '이름',
  })
  @IsString()
  @IsNotEmpty()
  name?: string;
}
