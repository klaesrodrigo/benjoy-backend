import * as mongoose from 'mongoose';
import { CompaniesAddressSchema } from './companiesAddress.schema';
import { CompaniesContactSchema } from './companiesContact.schema';


export const CompaniesSchema = new mongoose.Schema({
  name: String,
  contact: CompaniesContactSchema,
  address: CompaniesAddressSchema,
  is_active: Boolean
}, { timestamps: true });
