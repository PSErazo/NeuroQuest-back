import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  create(@Body() createScoreDto: CreateScoreDto) {
    return this.scoreService.create(createScoreDto);
  }

  // @Get()
  // findbyUser(@Body() email: string){
  //   return this.scoreService.findOnebyUser(email);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.scoreService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateScoreDto: UpdateScoreDto) {
  //   return this.scoreService.update(+id, updateScoreDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.scoreService.remove(+id);
  // }
}
