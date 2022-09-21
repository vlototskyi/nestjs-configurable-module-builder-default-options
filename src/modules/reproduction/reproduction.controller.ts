import { Controller, Get } from '@nestjs/common';
import { BigQueryClient } from '../bigquery';

@Controller()
export class ReproductionController {
  constructor(private readonly bigQueryClient: BigQueryClient) {}

  @Get()
  getTest(): string {
    return 'test';
  }
}
