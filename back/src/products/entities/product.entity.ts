import { IsNotEmpty } from 'class-validator';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['id'])
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  color: string;
  @Column()
  @IsNotEmpty()
  size: string;
  @Column()
  @IsNotEmpty()
  location: string;
  @Column()
  @IsNotEmpty()
  price_br: string;
  @Column()
  @IsNotEmpty()
  price_us: string;

  @OneToOne(() => Ticket, (ticket) => ticket.product, { cascade: true })
  @JoinColumn()
  ticket: Ticket;
}
