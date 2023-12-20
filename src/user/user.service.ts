import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(user: CreateUserInput): Promise<boolean> {
    return this.userRepository.createUser(user);
  }
}
