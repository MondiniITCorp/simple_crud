import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  oldPassword: string;

  @ApiProperty()
  @IsOptional()
  newPassword: string;

  @ApiProperty()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsOptional()
  role: string;

  @ApiProperty()
  @IsOptional()
  accountName: string;

  @ApiProperty()
  @IsOptional()
  selectionAccountType: string;

  @ApiProperty()
  @IsOptional()
  selectionManagement: string;

  @ApiProperty()
  @IsOptional()
  selectionPriority: string;
}
