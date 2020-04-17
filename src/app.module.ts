import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LinkService } from './link/link.service';
import { LinkModule } from './link/link.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGOHQ_URL || 'mongodb://localhost/link-shortener',
      { useUnifiedTopology: true, useNewUrlParser: true },
    ),
    AuthModule,
    UsersModule,
    LinkModule,
  ],
  controllers: [AppController],
  providers: [AppService, LinkService],
})
export class AppModule {}
