import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ScoreModule } from './score/score.module';

@Module({
  imports: [MongooseModule
    .forRoot('mongodb+srv://ronpaseo:ceu6IEm5mRDVaILL@cluster0.0apsziv.mongodb.net/nq'), 
    UserModule,
    AuthModule,
    ScoreModule,
    ]
})
export class AppModule {}
