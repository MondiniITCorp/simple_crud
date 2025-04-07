import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  ValidationPipe,
  Delete,
  Param,
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

  @Get('')
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(id);
  }

  @Patch()
  @ApiBody({ type: UpdateProductDto })
  async updateProduct(
    @Body(ValidationPipe) updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(updateProductDto);
  }

  @Delete(':id')
  @ApiBody({
    description: 'Delete product by id',
    type: Number,
  })
  async deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(+id);
  }
}
