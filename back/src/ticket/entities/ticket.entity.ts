import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['name'])
export class Ticket {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;


  @OneToOne(() => Product, (product) => product.id)
  product: Product;

  @Column()
  @IsNotEmpty()
  color_english: string;

  @Column()
  @IsNotEmpty()
  size: string;
}
