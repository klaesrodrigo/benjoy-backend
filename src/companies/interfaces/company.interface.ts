import { CompaniesAddress } from '../entities/companyAddress.entity';
import { CompaniesContact } from '../entities/companyContact.entity';

export interface Company extends Document {
  name: string;
  contact: CompaniesContact;
  address: CompaniesAddress;
  is_active: boolean;
}
