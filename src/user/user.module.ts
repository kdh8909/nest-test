import { Global, Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { PrismaModule } from './prisma.module';
import { UserRepository } from '../repository/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  imports: [],
})
export class UserModule {}
