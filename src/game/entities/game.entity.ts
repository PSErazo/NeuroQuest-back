import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Game {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  router: string;
  @Prop({ required: true })
  text: string;
  @Prop({ required: true })
  icon: string;

  @Prop({ unique: true, required: true })
  codigo: number;
}

export const GameSchema = SchemaFactory.createForClass(Game);
