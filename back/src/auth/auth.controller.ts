import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBody } from '@nestjs/swagger';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginUserDto })
  async login(@Body() body) {
    return this.authService.validateUser(body);
  }

  @Post('loginSwagger')
  @ApiBody({ type: LoginUserDto })
  async loginSwagger(@Body() body) {
    return this.authService.loginSwagger(body);
  }
}
