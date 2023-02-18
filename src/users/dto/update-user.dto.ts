import { UsersAddress } from '../entities/userAddress.entity';

export class UpdateUserDto {
  address: UsersAddress;
  email: string;
  phone: string;
}
