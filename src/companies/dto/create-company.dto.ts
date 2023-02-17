import { CompaniesAddress } from '../entities/companyAddress.entity';
import { CompaniesContact } from '../entities/companyContact.entity';

export class CreateCompanyDto {
  readonly name: string;
  readonly contact: CompaniesContact;
  readonly address: CompaniesAddress;
}
