import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserType } from '../users/user.types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserType | null> {
    const user = await this.usersService.findOne(email);

    if (!user) {
      throw new HttpException(
        'E-mail não é valido!',
        HttpStatus.NOT_ACCEPTABLE,
      );
    } else if (user.password !== password) {
      throw new HttpException('Senha inválida!', HttpStatus.NOT_ACCEPTABLE);
    }

    const { ...result } = user;
    return result;
  }

  async login(email: string, password: string) {
    const payload = await this.validateUser(email, password);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
