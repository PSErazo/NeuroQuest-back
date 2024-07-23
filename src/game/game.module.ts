import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from './entities/game.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
  ],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
