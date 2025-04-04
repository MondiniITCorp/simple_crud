import { Controller, Post, Body, Get } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.createTicket(createTicketDto);
  }

  @Post('swagger')
  createSwagger(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.createUserSw(createTicketDto);
  }

  @Get(':name')
  getTicketById(@Body() id: string) {
    return this.ticketService.getTicketById(id);
  }
}
