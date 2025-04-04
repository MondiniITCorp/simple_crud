import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { UserFromJwt } from '../dto/user-from-jwt.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'topSecret512',
    });
  }

  async validate(payload: UserFromJwt): Promise<UserFromJwt> {
    const user = await this.userService.findOneByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException('User not found!');
    }

    return {
      email: payload.email,
      token: payload.token,
      password: payload.password,
    };
  }
}
