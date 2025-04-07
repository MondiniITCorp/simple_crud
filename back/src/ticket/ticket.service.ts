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

  async updateTicket(updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketRepository.findOne({
      where: { id: updateTicketDto.id },
    });
    Object.assign(ticket, updateTicketDto);

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

  async findUserOrThrow(email: string) {
    const user = await this.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }

  async getTicketById(id: number) {
    return this.ticketRepository.findOne({ where: { id: id } });
  }

  async getAllTicket() {
    return this.ticketRepository.find();
  }

  async deleteTicket(id: number) {
    const ticket = await this.ticketRepository.findOne({
      where: { id: id },
    });
    if (!ticket) {
      throw new UnauthorizedException('ticket not found');
    }
    return this.ticketRepository.delete(ticket.id);
  }
}
