import {
  Controller,
  Post,
  Body,
  Patch,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'back/src/auth/guard/jwtauth.guard';
import { GetUserFromJwt } from 'back/src/auth/decorators/getuser.decorator';
import { UserFromJwt } from 'back/src/auth/dto/user-from-jwt.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

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

  @Patch()
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: UpdateUserDto })
  @ApiBearerAuth()
  async updateUser(
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
    @GetUserFromJwt() userFromJWT: UserFromJwt,
  ) {
    return this.usersService.updateUser(updateUserDto, userFromJWT);
  }
}
