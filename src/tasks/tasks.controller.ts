import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";


@Controller({

})
export class TasksController{

    constructor(private tastksService: TasksService){
        
    }

    @Get('/tasks')
    getAllTasks(){
        return this.tastksService.getTasks();
    }
    
}