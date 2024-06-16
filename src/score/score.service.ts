import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Score, ScoreDocument } from './schemas/score.schema';
import { Model } from 'mongoose';

@Injectable()
export class ScoreService {
  constructor(
    @InjectModel(Score.name) private scoreModule: Model<ScoreDocument>
  ){}

  create(createScoreDto: CreateScoreDto) {
    return this.scoreModule.create(createScoreDto);
  }

  async findbyUser(email:string){
    console.log("entrando al servicio", email);
    const scores = await this.scoreModule.find({email:email}).exec();
    console.log("entrando al servicio", scores);
    
    return scores
  }

  async findbyGame(game:string){
    console.log("entrando al servicio", game);
    const scoreGame = await this.scoreModule.find({game:game}).exec();
    console.log("entrando al servicio", scoreGame);
    
    return scoreGame
  }
}
