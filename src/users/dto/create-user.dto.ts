import { IsEmail, IsNotEmpty, IsString, } from "class-validator";
// import { UUID, randomUUID } from "crypto";

export class CreateUserDto {


    // @IsUUID()
    // @
//     // readonly idUser: UUID

    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
