import { Score } from './../assets/score';
import { Injectable } from '@nestjs/common';
import { SCORE } from 'src/assets/bd';

@Injectable()
export class ProjectsService {

    saveScore(score: Score) :Score{
        SCORE.push(score);
        return score;
    }
    getScore(userId: string): Score[]{
        return SCORE.filter(score => score.userId === userId)
    }
}
