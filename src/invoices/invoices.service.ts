import { Inject, Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceDocument } from './schemas/invoices.schema';
import { Invoice } from './entities/invoice.entity';
import { Model } from 'mongoose';

@Injectable()
export class InvoicesService {
  constructor(
    @Inject('INVOICE_MODEL')
    private invoiceModel: Model<Invoice>,
  ) {}
  async create(createInvoiceDto: CreateInvoiceDto): Promise<InvoiceDocument> {
    const invoice = new this.invoiceModel(createInvoiceDto);
    await invoice.save();
    return invoice;
  }

  findAll() {
    return `This action returns all invoices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
