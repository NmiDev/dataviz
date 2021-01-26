import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Application extends Document {
  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  version: string;

  @Prop()
  createdAt: Date;

  @Prop()
  status: string;

  @Prop([String])
  components: string[];

  @Prop()
  businessValue: number;

  @Prop()
  technicalHealth: number;

  @Prop()
  complexity: number;

  @Prop()
  criticality: string;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
