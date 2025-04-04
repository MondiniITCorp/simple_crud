import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  accountName: string;
  @ApiProperty()
  @IsNotEmpty()
  selectionAccountType: string;
  @ApiProperty()
  @IsNotEmpty()
  selectionManagement: string;
  @ApiProperty()
  @IsNotEmpty()
  selectionPriority: string;
}
