import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}
