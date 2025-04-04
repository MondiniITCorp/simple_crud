import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  async createTicket(createTicketDto: CreateTicketDto) {
    // if (!createTicketDto.name || !createTicketDto.password)
    //   throw new Error('Missing required fields');
    // if (await this.findOneByEmail(createTicketDto.name))
    //   throw new UnauthorizedException('Username already in use');
    // const userDto = {
    //   name: this.decrypt(createTicketDto.name),
    //   password: this.decrypt(createTicketDto.password),
    // };
    // const user = new User();
    // Object.assign(user, userDto);
    // user.password = await this.hash(this.decrypt(createTicketDto.password));
    // return this.ticketRepository.save();
  }

  async createUserSw(createTicketDto: CreateTicketDto) {
    // const emailInUse = await this.findOneByEmail(createTicketDto.name);
    // if (emailInUse) throw new UnauthorizedException('Email already in use');
    // const client = new User();
    // client.name = createTicketDto.name;
    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(
    //   createTicketDto.password,
    //   saltRounds,
    // );
    // client.password = hashedPassword;
    // return this.ticketRepository.save(client);
  }

  async updateticket(updateticketDto: UpdateTicketDto) {
    const ticket = await this.ticketRepository.findOne({
      where: { name: updateticketDto.name },
    });
    Object.assign(ticket, updateticketDto);

    return this.ticketRepository.save(ticket);
  }

  findAll() {
    return this.ticketRepository.find();
  }

  findOne(id: number) {
    return this.ticketRepository.findOne({ where: { id: id } });
  }

  async findOneByEmail(name: string): Promise<Ticket | undefined> {
    return this.ticketRepository.findOne({ where: { name: name } });
  }

  remove(id: number) {
    return this.ticketRepository.delete(id);
  }

  async findUserOrThrow(email: string) {
    const user = await this.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }

  async getTicketById(name: string) {
    return this.ticketRepository.findOne({ where: { name: name } });
  }

  async getAllTicket() {
    return this.ticketRepository.find();
  }

  async deleteticket(name: string) {
    const ticket = await this.ticketRepository.findOne({
      where: { name: name },
    });
    if (!ticket) {
      throw new UnauthorizedException('ticket not found');
    }
    return this.ticketRepository.delete(ticket.id);
  }
}
