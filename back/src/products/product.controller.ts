import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';
import { UpdateProductDto } from './dto/update-user.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.productsService.createUser(createUserDto);
  }

  @Post('swagger')
  createSwagger(@Body() createUserDto: CreateUserDto) {
    return this.productsService.createUserSw(createUserDto);
  }

  @Get(':name')
  getProductById(@Body() id: string) {
    return this.productsService.getProductById(id);
  }
  @Get('all')
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Patch()
  @ApiBody({ type: UpdateProductDto })
  async updateProduct(
    @Body(ValidationPipe) updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(updateProductDto);
  }

  @Delete(':name')
  async deleteProduct(@Body() name: string) {
    return this.productsService.deleteProduct(name);
  }
}
