import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {},
  { timestamps: true, versionKey: false },
);
// it will be setup by mongoose plugin at users.module
