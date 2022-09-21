import { Module } from '@nestjs/common';
import { ReproductionController } from './reproduction.controller';

@Module({
  controllers: [ReproductionController],
})
export class ReproductionModule {}
