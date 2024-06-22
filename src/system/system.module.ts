import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
import { SystemController } from './system.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { System, SystemSchema } from './schemas/system.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: System.name, schema: SystemSchema}])],
  controllers: [SystemController],
  providers: [SystemService],
})
export class SystemModule {}
