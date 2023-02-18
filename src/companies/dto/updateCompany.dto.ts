import { PartialType } from '@nestjs/mapped-types';
import { CompaniesAddress } from '../entities/companyAddress.entity';
import { CompaniesContact } from '../entities/companyContact.entity';
import { CreateCompanyDto } from './createCompany.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  readonly name?: string;
  readonly contact?: CompaniesContact;
  readonly address?: CompaniesAddress;
}
