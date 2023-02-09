import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('COMPANY_MODEL')
    private companyModel: Model<Company>,
  ) {}

  create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = new this.companyModel(createCompanyDto);
    return createdCompany.save();
  }

  findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  findOne(id: string): Promise<Company> {
    return this.companyModel.findOne({ _id: id, is_active: true }).exec();
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException('Comapnhia não encontrada');
    }
    await this.companyModel.updateOne({ _id: id }, updateCompanyDto);
    return { ...found, ...updateCompanyDto };
  }

  async remove(id: string): Promise<void> {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException('Comapnhia não encontrada');
    }
    const deletedObj = {
      is_active: false,
      deletedAt: new Date(),
    };
    await this.companyModel.updateOne({ _id: id }, deletedObj);
  }
}
