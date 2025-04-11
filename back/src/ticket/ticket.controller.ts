import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwtauth.guard';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'Create ticket',
    type: CreateTicketDto,
  })
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.createTicket(createTicketDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'Get ticket by id',
    type: Number,
  })
  getTicketById(@Param('id') id: number) {
    return this.ticketService.getTicketById(id);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'Update ticket',
    type: UpdateTicketDto,
  })
  update(@Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.updateTicket(updateTicketDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'Delete ticket by id',
    type: Number,
  })
  delete(@Param('id') id: number) {
    return this.ticketService.deleteTicket(id);
  }
}
