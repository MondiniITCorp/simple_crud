import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginUserDto: LoginUserDto) {
    try {
      const decryptUsername = this.usersService.decrypt(loginUserDto.username);
      const decryptPassword = this.usersService.decrypt(loginUserDto.password);

      if (!decryptUsername || !decryptPassword) {
        throw new UnauthorizedException('Invalid encrypted data');
      }

      const user = await this.usersService.findOneByEmail(decryptUsername);

      await this.usersService.validatePassword(decryptPassword, user);

      return await this.gerarToken(user);
    } catch {
      throw new UnauthorizedException('Decryption failed');
    }
  }

  async loginSwagger(LoginUserDto) {
    try {
      const user = await this.usersService.findOneByEmail(
        LoginUserDto.username,
      );
      if (!user) {
        throw new UnauthorizedException('Invalid username or password');
      }

      await this.usersService.validatePassword(LoginUserDto.password, user);
      return await this.gerarToken(user);
    } catch {
      throw new UnauthorizedException('Decryption failed');
    }
  }

  async gerarToken(payload: User) {
    return {
      access_token: this.jwtService.sign(
        { email: payload.name },
        {
          secret: 'topSecret512',
          expiresIn: '20h',
        },
      ),
    };
  }
}
