import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Score, ScoreDocument } from './schemas/score.schema';
import { Model } from 'mongoose';
import { find } from 'rxjs';

@Injectable()
export class ScoreService {
  constructor(@InjectModel(Score.name) private scoreModule: Model<Score>) {}

  // creacion del escore del usuario
  create(email: string, createScoreDto: CreateScoreDto) {
    return this.scoreModule.create({
      email,
      ...createScoreDto,
      date: new Date(),
    });
  }

  // obtiene los puntajes del usuario x juego elegido
  async findOneScoreByUserAndGame(
    email: string,
    game: number,
  ): Promise<Score[]> {
    console.log('entrando al servicio', email);
    const scores = await this.scoreModule
      .find({ email, game })
      .sort({ date: 1 });
    console.log('entrando al servicio', scores);
    return scores;
  }

  // debe obtener los scores agrupados por usuario
  async findMaxScoreByUserAndGame(game: number) {
    console.log('entrando a maximo');
    const scoreGame = await this.scoreModule
      .aggregate([{ $match: { game } }])
      .group({
        _id: '$email',
        maxPuntaje: { $max: '$score' },
      })
      .sort({ maxPuntaje: -1 })
      .exec();
    return scoreGame;
  }

  async findMinScoreByUserAndGame(game: number) {
    console.log('entrando al minimo');
    const scoreGame = await this.scoreModule
      .aggregate([{ $match: { game } }])
      .group({
        _id: '$email',
        minPuntaje: { $min: '$score' },
      })
      .sort({ minPuntaje: 1 })
      .exec();
    return scoreGame;
  }
}
