import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return this.userModel.findOne({ _id: id, is_active: true }).exec();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException('Comapnhia não encontrada');
    }
    await this.userModel.updateOne({ _id: id }, updateUserDto);
    return { ...found, ...updateUserDto };
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException('Comapnhia não encontrada');
    }
    const deletedObj = {
      is_active: false,
      deletedAt: new Date(),
    };
    await this.userModel.updateOne({ _id: id }, deletedObj);
  }
}
