import * as mongoose from 'mongoose';
import { UserAddressesSchema } from './userAddresses.schema';
import { User } from '../entities/user.entity';

export type UserDocument = mongoose.HydratedDocument<User>;

export const UsersSchema = new mongoose.Schema(
  {
    name: String,
    address: UserAddressesSchema,
    email: String,
    phone: String,
    password: String,
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    is_active: Boolean,
    deletedAt: Date,
  },
  { timestamps: true },
);
