import { CompaniesAddress } from "../entities/companyAddress.entity";
import { CompaniesContact } from "../entities/companyContact.entity";

export interface Cat extends Document {
    name: String,
    contact: CompaniesContact,
    address: CompaniesAddress,
    is_active: Boolean
  }