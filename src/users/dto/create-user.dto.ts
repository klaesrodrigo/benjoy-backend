import { UsersAddress } from '../entities/userAddress.entity';

export class CreateUserDto {
  name: string;
  address: UsersAddress;
  email: string;
  phone: string;
  password: string;
  company_id: string;
}
