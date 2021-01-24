import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Application extends Document {
  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop([String])
  components: string[];
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
