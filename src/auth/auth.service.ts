import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){

    }

    async register(registerDto: RegisterDto){

        const user = await this.usersService.findOneByEmail(registerDto.email);
        if(user){throw new BadRequestException('User already exists') }
         
        const {email, password, name} = registerDto
        return await this.usersService.create({email, password: await bcrypt.hash(password,10), name});
    }

    async login(login: LoginDto){
        const user = await this.usersService.findOneByEmail(login.email);
        if(!user){
            throw new UnauthorizedException(' email is wrong')
        }

        const isPasswordValid = await bcrypt.compare(login.password, user.password)

        if(!isPasswordValid){
            throw new UnauthorizedException('password is wrong')
        }

        const payload = {
            email:user.email
        }
        const token = await this.jwtService.signAsync(payload)

        return {
            token,
            ...{ name: user.name, email: user.email}

        }


    }
}
