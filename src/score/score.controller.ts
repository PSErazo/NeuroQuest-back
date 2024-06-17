import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
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
  create(@Body() createScoreDto:CreateScoreDto) {
    return this.scoreService.create(createScoreDto);
  }

  @Get(':email')
  findbyUser(@Param('email') email: string){
    return this.scoreService.findbyUser(email);
  }

  @Get('game/:game')
  findOne(@Param('game') game: string) {
    return this.scoreService.findbyGame(game);
  }
}
