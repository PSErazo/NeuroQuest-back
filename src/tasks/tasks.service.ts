import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getTasks() {
        return ['tasks1', 'tasks2', 'tasks3'];
    }
}
