import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTicketDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
  @ApiProperty()
  @IsOptional()
  name: string;
  @ApiProperty()
  @IsOptional()
  color_english: string;
  @ApiProperty()
  @IsOptional()
  size: string;
}
