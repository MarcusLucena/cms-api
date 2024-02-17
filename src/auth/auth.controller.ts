import { Controller, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(@Request() req) {
    const { email, password } = req.body;
    return this.authService.login(email, password);
  }
}
