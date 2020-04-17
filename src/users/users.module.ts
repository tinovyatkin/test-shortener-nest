import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

import { UsersService } from './users.service';
import { UserSchema } from '../schemas/user.schema';

@Module({
  imports: [
    /** @see {@link https://docs.nestjs.com/techniques/mongodb#plugins} */
    MongooseModule.forFeatureAsync([
      {
        name: 'User',
        useFactory: () => {
          const schema = UserSchema;
          schema.plugin(passportLocalMongoose);
          return schema;
        },
      },
    ]),
  ],
  providers: [UsersService],
})
export class UsersModule {}
