import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateScoreDto {

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    score: number;

    @IsNotEmpty()
    @IsString()
    game: string;
}
