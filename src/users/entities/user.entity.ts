import mongoose from 'mongoose';
import { UsersAddress } from './userAddress.entity';

export class User {
  name: string;
  address: UsersAddress;
  email: string;
  password: string;
  company_id: string;
  is_active?: boolean;
  deletedAt: string;
}
