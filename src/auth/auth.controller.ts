import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up-dto';
import { LoginDto } from './dto/login-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(['/sign-up', '/register'])
  signup(@Body() reqData: SignUpDto) {
    return this.authService.signup(reqData);
  }

  @Post(['/sign-in', '/login'])
  login(@Body() reqData: LoginDto) {
    return 'Login Route';
  }
}
