import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';
import { Ticket } from 'src/ticket/entities/ticket.entity';
// import { User } from './entities/products.entity';
// import { ProductsService } from './products.service';
// import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Ticket])],
  providers: [ProductsService],
  exports: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
