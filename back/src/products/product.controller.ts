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
import { CreateProductDto } from './dto/create-product.dto';
import { ApiBody } from '@nestjs/swagger';
import { UpdateProductDto } from './dto/update-user.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get(':id')
  getProductById(@Body() id: number) {
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

  @Delete(':id')
  async deleteProduct(@Body() id: number) {
    return this.productsService.deleteProduct(id);
  }
}
