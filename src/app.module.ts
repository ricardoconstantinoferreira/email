import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/email'),
    SystemModule,
  ],
})
export class AppModule {}
