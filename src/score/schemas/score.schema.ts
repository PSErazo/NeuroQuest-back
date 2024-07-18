import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ScoreDocument = HydratedDocument<Score>;

@Schema()
export class Score {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  score: number;

  @Prop({ required: true })
  game: number;

  @Prop()
  date?: Date;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
