import { IsNotEmpty } from 'class-validator';

export class CreateBoradDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
