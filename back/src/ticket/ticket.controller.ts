import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @ApiBody({
    description: 'Create ticket',
    type: CreateTicketDto,
  })
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.createTicket(createTicketDto);
  }

  @Get(':id')
  @ApiBody({
    description: 'Get ticket by id',
    type: Number,
  })
  getTicketById(@Param('id') id: number) {
    return this.ticketService.getTicketById(id);
  }

  @Put()
  @ApiBody({
    description: 'Update ticket',
    type: UpdateTicketDto,
  })
  update(@Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.updateTicket(updateTicketDto);
  }

  @Delete(':id')
  @ApiBody({
    description: 'Delete ticket by id',
    type: Number,
  })
  delete(@Param('id') id: number) {
    return this.ticketService.deleteTicket(id);
  }
}
