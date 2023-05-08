import { IsString, MaxLength } from 'class-validator';

export class CreatePlayerDTO {
  @IsString()
  @MaxLength(15)
  name: string;

  @IsString()
  @MaxLength(15)
  tag: string;
}
