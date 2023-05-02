import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
      is_active: true,
    });
    await createdUser.save();
    delete createdUser.password;
    return createdUser;
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: number): Promise<UserDocument> {
    return this.userModel.findOne({ _id: id, is_active: true }).exec();
  }

  async findByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email, is_active: true }).exec();
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
