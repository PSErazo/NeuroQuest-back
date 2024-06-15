import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Score, ScoreDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class ScoreService {
  constructor(
    @InjectModel(Score.name) private scoreModule: Model<ScoreDocument>
  ){}

  create(createScoreDto: CreateScoreDto) {
    return this.scoreModule.create(createScoreDto);
  }

  findAll() {
    return `This action returns all score`;
  }

  // async findOneByUser(email:string): Score[]{
  //   const scores = await this.scoreModule.findOne({email});

  //   return scores
  // }

  update(id: number, updateScoreDto: UpdateScoreDto) {
    return `This action updates a #${id} score`;
  }

  remove(id: number) {
    return `This action removes a #${id} score`;
  }
}
