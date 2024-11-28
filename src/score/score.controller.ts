import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  HttpCode,
  Query,
} from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Scores')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  create(@Request() req, @Body() createScoreDto: CreateScoreDto) {
    let email = req.user.email;
    return this.scoreService.create(email, createScoreDto);
  }
  //  obtiene todos los puntajes del usuario por juego
  @Get(':game')
  findbyUser(@Param('game') game: number, @Request() req) {
    console.log(req.user.email, game);
    let email = req.user.email;
    return this.scoreService.findOneScoreByUserAndGame(email, game);
  }

  @Get('top/:game')
  findOne(@Param('game') game: number, @Query('top') top?: number) {
    if (!top) top = 10;

    if (game == 1 || game == 2 || game == 5)
      return this.scoreService.findMaxScoreByUserAndGame(game, top);
    else return this.scoreService.findMinScoreByUserAndGame(game, top);
  }
}
