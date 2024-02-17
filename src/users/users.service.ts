import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UserType } from './user.types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<UserType | undefined> {
    const user: UserType | undefined = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }

  async create(user: UserType): Promise<UserType> {
    const findUser = await this.findOne(user.email);
    if (findUser) {
      throw new HttpException(
        'E-mail já cadastrado!',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return this.prisma.user.create({
      data: user,
    });
  }
}
