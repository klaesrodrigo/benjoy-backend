import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { DatabaseModule } from 'src/database/database.module';
import { companiesProviders } from './companies.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CompaniesController],
  providers: [CompaniesService, ...companiesProviders]
})
export class CompaniesModule {}
