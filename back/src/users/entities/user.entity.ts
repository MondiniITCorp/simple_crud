import { IsEmail, IsNotEmpty } from 'class-validator';
import { Board } from 'src/boards/entities/board.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import { Task } from 'src/task/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsNotEmpty()
  accountName: string;

  @Column()
  @IsNotEmpty()
  accountType: string;

  @Column()
  @IsNotEmpty()
  management: string;

  @Column()
  @IsNotEmpty()
  priority: string;

  @OneToMany(() => Client, (client) => client.user)
  clients: Client[];

  @OneToMany(() => Board, (board) => board.user)
  boards: Board[];

  @OneToMany(() => Task, (tasks) => tasks.user)
  tasks: Task[];

  @OneToMany(() => Menu, (menu) => menu.user)
  menu: Menu;
}
