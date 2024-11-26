import { Injectable } from '@nestjs/common';
import { Game } from './entities/game.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private gameModule: Model<Game>) {}

  findAll() {
    return this.gameModule.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }
}
