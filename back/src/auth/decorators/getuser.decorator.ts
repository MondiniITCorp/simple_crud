import { createParamDecorator } from '@nestjs/common';
import { UserFromJwt } from '../dto/user-from-jwt.dto';

export const GetUserFromJwt = createParamDecorator((data, req): UserFromJwt => {
  return req.args[0].user;
});
