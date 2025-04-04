import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dto/update-user.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    // if (!createUserDto.name || !createUserDto.password)
    //   throw new Error('Missing required fields');
    // if (await this.findOneByEmail(createUserDto.name))
    //   throw new UnauthorizedException('Username already in use');
    // const userDto = {
    //   name: this.decrypt(createUserDto.name),
    //   password: this.decrypt(createUserDto.password),
    // };
    // const user = new User();
    // Object.assign(user, userDto);
    // user.password = await this.hash(this.decrypt(createUserDto.password));
    // return this.productRepository.save();
  }

  async createUserSw(createUserDto: CreateUserDto) {
    // const emailInUse = await this.findOneByEmail(createUserDto.name);
    // if (emailInUse) throw new UnauthorizedException('Email already in use');
    // const client = new User();
    // client.name = createUserDto.name;
    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(
    //   createUserDto.password,
    //   saltRounds,
    // );
    // client.password = hashedPassword;
    // return this.productRepository.save(client);
  }

  async updateProduct(updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({
      where: { name: updateProductDto.name },
    });
    Object.assign(product, updateProductDto);

    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOne({ where: { id: id } });
  }

  async findOneByEmail(name: string): Promise<Product | undefined> {
    return this.productRepository.findOne({ where: { name: name } });
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }

  async findUserOrThrow(email: string) {
    const user = await this.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }

  async getProductById(name: string) {
    return this.productRepository.findOne({ where: { name: name } });
  }

  async getAllProducts() {
    return this.productRepository.find();
  }

  async deleteProduct(name: string) {
    const product = await this.productRepository.findOne({
      where: { name: name },
    });
    if (!product) {
      throw new UnauthorizedException('Product not found');
    }
    return this.productRepository.delete(product.id);
  }
}
