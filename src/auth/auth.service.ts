import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';

import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    // const user = await this.usersService.findOneByEmail(registerDto.email);
    // if(user){throw new BadRequestException('User already exists') }

    const { email, password, name } = registerDto;
    await this.usersService.create({
      email,
      password: bcrypt.hashSync(password, 10),
      name,
    });
    return { user: { email, name } };
  }

  async login(login: LoginDto) {
    const user = await this.usersService.findOneByEmail(login.email);
    if (!user) {
      throw new UnauthorizedException('correo inorrecto');
    }
    // se puede usar un prefijo para volverlo mas seguridad.
    const isPasswordValid = await bcrypt.compare(login.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('contraseña incorrecta');
    }
    const payload = {
      email: user.email,
    };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      user: { name: user.name, email: user.email },
    };
  }
}
