import { Injectable } from '@nestjs/common';
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
      const newUser = await this.userModel.create(createUserDto);
      return newUser
  }

  async findOneByEmail(email:string){
    const user = await this.userModel.findOne({email});

    return user
  }

}
