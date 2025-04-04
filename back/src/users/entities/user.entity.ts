import { IsNotEmpty } from 'class-validator';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  password: string;
}
