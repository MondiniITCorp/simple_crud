import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dto/update-user.dto';
import { Ticket } from '../ticket/entities/ticket.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    const product = new Product();
    Object.assign(product, createProductDto);

    const ticket = new Ticket();
    ticket.name = createProductDto.name;
    ticket.size = createProductDto.size_us;
    ticket.color_english = createProductDto.color_us;
    product.ticket = ticket;

    await this.ticketRepository.save(ticket);

    const savedProduct = await this.productRepository.save(product);
    return savedProduct;
  }

  async updateProduct(updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({
      where: { id: updateProductDto.id },
    });
    if (!product) {
      throw new UnauthorizedException('Product not found');
    }
    Object.assign(product, updateProductDto);

    return this.productRepository.save(product);
  }

  async getProductById(id: number) {
    const product = await this.productRepository.findOne({ where: { id: id } });
    if (!product) {
      throw new UnauthorizedException('Product not found');
    }
    return product;
  }

  async getAllProducts() {
    try {
      const products = await this.productRepository.find({
        relations: ['ticket'],
      });
      return products;
    } catch {
      throw new UnauthorizedException('Failed to fetch products');
    }
  }

  async deleteProduct(id: number) {
    const product = await this.productRepository.findOne({
      where: { id: id },
    });
    if (!product) {
      throw new UnauthorizedException('Product not found');
    }
    return this.productRepository.delete(product.id);
  }
}
