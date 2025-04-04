import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import * as CryptoJS from 'crypto-js';
import { UserFromJwt } from 'src/auth/dto/user-from-jwt.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    if (!createUserDto.name || !createUserDto.password)
      throw new Error('Missing required fields');

    if (await this.findOneByEmail(createUserDto.name))
      throw new UnauthorizedException('Username already in use');

    const userDto = {
      name: this.decrypt(createUserDto.name),
      password: this.decrypt(createUserDto.password),
    };

    const user = new User();

    Object.assign(user, userDto);

    user.password = await this.hash(this.decrypt(createUserDto.password));

    return this.userRepository.save(user);
  }

  async createUserSw(createUserDto: CreateUserDto) {
    const emailInUse = await this.findOneByEmail(createUserDto.name);
    if (emailInUse) throw new UnauthorizedException('Email already in use');
    const client = new User();
    client.name = createUserDto.name;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltRounds,
    );
    client.password = hashedPassword;

    return this.userRepository.save(client);
  }

  async updateUserPassword(
    oldPassword: string,
    newPassword: string,
    user: User,
  ) {
    const decryptedOldPassword = this.decrypt(oldPassword);
    await this.validatePassword(decryptedOldPassword, user);

    if (!newPassword)
      throw new UnauthorizedException('New password is required');

    if (newPassword.length < 8)
      throw new UnauthorizedException('Password must be at least 8 characters');

    if (newPassword === oldPassword)
      throw new UnauthorizedException('New password must be different');

    const decryptedNewPassword = this.decrypt(newPassword);

    user.password = await this.hash(decryptedNewPassword);

    return this.userRepository.save(user);
  }

  async updateUser(updateUserDto: UpdateUserDto, userFromJwt: UserFromJwt) {
    const user = await this.findUserOrThrow(userFromJwt.email);

    if (updateUserDto.oldPassword)
      return this.updateUserPassword(
        updateUserDto.oldPassword,
        updateUserDto.newPassword,
        user,
      );

    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async findOneByEmail(name: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { name: name } });
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async findUserOrThrow(email: string) {
    const user = await this.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }

  decrypt(encryptString: string) {
    return CryptoJS.AES.decrypt(encryptString, process.env.HASHPASS).toString(
      CryptoJS.enc.Utf8,
    );
  }

  async hash(decryptString: string) {
    return await bcrypt.hash(decryptString, 10);
  }

  async validatePassword(password: string, user: User) {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid current password');

    return true;
  }
}
