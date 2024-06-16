import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateScoreDto {

    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    score: number;

    @IsNotEmpty()
    @IsString()
    game: string;
}
