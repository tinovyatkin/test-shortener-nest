import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkSchema } from '../schemas/link.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Link', schema: LinkSchema }])],
})
export class LinkModule {}
