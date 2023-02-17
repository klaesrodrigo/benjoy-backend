import * as mongoose from 'mongoose';
import { UserAddressesSchema } from './userAddresses.schema';

export const CompaniesSchema = new mongoose.Schema(
  {
    name: String,
    address: UserAddressesSchema,
    email: String,
    password: String,
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    is_active: Boolean,
    deletedAt: Date,
  },
  { timestamps: true },
);
