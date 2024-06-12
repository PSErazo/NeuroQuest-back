import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Score } from 'src/assets/score';
import { ProjectsService } from './projects.service';

@Controller('score')
export class ProjectsController {

    constructor(private projectsService: ProjectsService){

    }

    @Post()
    saveScore(@Body() score:Score){
        return this.projectsService.saveScore(score);
    }

    @Get('/:userid')
    getScore(@Param('userid') userId: string): Score[]{
        return this.projectsService.getScore(userId);
    }

}
