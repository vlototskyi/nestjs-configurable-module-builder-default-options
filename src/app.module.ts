import { Module } from '@nestjs/common';
import { BigQueryModule } from './modules/bigquery';
import { ReproductionModule } from './modules/reproduction/reproduction.module';

@Module({
  imports: [
    BigQueryModule.forRoot({
      projectId: 'testProject',
      keyFilename: 'testCredentials',
    }),
    ReproductionModule,
  ],
})
export class AppModule {}
