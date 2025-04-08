import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from './guard/jwtauth.guard';
import { GetUserFromJwt } from './decorators/getuser.decorator';
import { UserFromJwt } from './dto/user-from-jwt.dto';
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

  @Get('validateToken')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async validateToken(@GetUserFromJwt() userFromJwt: UserFromJwt) {
    return await this.authService.validateToken(userFromJwt);
  }
}
