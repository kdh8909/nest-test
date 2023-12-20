import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.ENV_FILE_PATH === undefined
          ? 'local.env'
          : process.env.ENV_FILE_PATH,
    }),
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
