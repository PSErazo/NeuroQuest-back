import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class LoginDto{

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;
}