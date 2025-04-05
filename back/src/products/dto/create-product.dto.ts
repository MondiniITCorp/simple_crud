import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  name_us: string;

  @ApiProperty()
  @IsNotEmpty()
  color: string;
  @ApiProperty()
  @IsNotEmpty()
  color_us: string;
  @ApiProperty()
  @IsNotEmpty()
  size: string;
  @ApiProperty()
  @IsNotEmpty()
  size_us: string;
  @ApiProperty()
  @IsNotEmpty()
  location: string;
  @ApiProperty()
  @IsNotEmpty()
  price_br: string;
  @ApiProperty()
  @IsNotEmpty()
  price_us: string;
}
