import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Prisma } from '../../prisma';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserInput } from '../dto/user.dto';

@Controller('User')
@ApiTags('사용자')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '사용자 생성', description: '사용자를 생성한다.' })
  @ApiCreatedResponse({
    status: 200,
    description: '성공',
    type: Boolean,
  })
  @Post()
  async createUser(@Body() user: CreateUserInput): Promise<boolean> {
    return await this.userService.createUser(user);
  }
}
