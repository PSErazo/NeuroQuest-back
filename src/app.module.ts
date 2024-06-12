import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule,MongooseModule.forRoot('mongodb://localhost/nq'), TasksModule, ProjectsModule, UsersModule]
})
export class AppModule {}
