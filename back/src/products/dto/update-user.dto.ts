import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
  @ApiProperty()
  @IsOptional()
  name: string;
  @ApiProperty()
  @IsOptional()
  color: string;
  @ApiProperty()
  @IsOptional()
  size: string;
  @ApiProperty()
  @IsOptional()
  location: string;
  @ApiProperty()
  @IsOptional()
  price_br: string;
  @ApiProperty()
  @IsOptional()
  price_us: string;
}
