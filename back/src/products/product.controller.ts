import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  ValidationPipe,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiBody } from '@nestjs/swagger';
import { UpdateProductDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwtauth.guard';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get('')
  @UseGuards(JwtAuthGuard)
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(id);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: UpdateProductDto })
  async updateProduct(
    @Body(ValidationPipe) updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'Delete product by id',
    type: Number,
  })
  async deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(+id);
  }
}
