import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { ScoreModule } from './score/score.module';

@Module({
  imports: [MongooseModule
    .forRoot('mongodb+srv://ronpaseo:ceu6IEm5mRDVaILL@cluster0.0apsziv.mongodb.net/nq'), 
    UsersModule,
    AuthModule,
    ScoreModule,
    ]
})
export class AppModule {}
