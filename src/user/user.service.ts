import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try{
      const newUser = new this.userModel(createUserDto);
      return await newUser.save();

    }catch(error){
      if (error.code === 11000) {
        console.log(`el usuario ${createUserDto.email} ya se encuentra registrado`);
        throw new  BadRequestException(`el usuario 
          ${createUserDto.email} ya se encuentra registrado`)
      }
      throw new  InternalServerErrorException(`error en consola`)
    }
  }

  async findOneByEmail(email:string){
    const user = await this.userModel.findOne({email});

    return user
  }

}
