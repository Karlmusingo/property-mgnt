import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

// export type CatDocument = User & Document;

// @Schema()
// export class User {
//   @Prop()
//   username: string;

//   @Prop()
//   password: string;
// }

// export const CatSchema = SchemaFactory.createForClass(User);
