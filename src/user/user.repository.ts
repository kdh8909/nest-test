import { Injectable, Post } from '@nestjs/common';
import { CreateUserInput } from './dto/user.dto';
import { ApiBody } from '@nestjs/swagger';
import { PrismaService } from '../service/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(user: CreateUserInput): Promise<boolean> {
    const result = await this.prisma.user.create({
      data: {
        password: user.password,
        name: user.name,
        email: user.email,
      },
    });
    return !!result;
  }
}
