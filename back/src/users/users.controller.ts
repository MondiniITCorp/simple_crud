import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/guard/jwtauth.guard';
// import { GetUserFromJwt } from 'src/auth/decorators/getuser.decorator';
// import { UserFromJwt } from 'src/auth/dto/user-from-jwt.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Post('swagger')
  createSwagger(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUserSw(createUserDto);
  }

  // @Patch()
  // @UseGuards(JwtAuthGuard)
  // @ApiBody({ type: UpdateUserDto })
  // @ApiBearerAuth()
  // async updateUser(
  //   @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  //   @GetUserFromJwt() userFromJWT: UserFromJwt,
  // ) {
  //   return this.usersService.updateUser(updateUserDto, userFromJWT);
  // }
}
