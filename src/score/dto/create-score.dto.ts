import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateScoreDto {
  @IsNotEmpty()
  @IsNumber()
  score: number;

  @IsNotEmpty()
  @IsNumber()
  game: number;
}
