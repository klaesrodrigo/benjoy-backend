import * as mongoose from 'mongoose';
import { Invoice } from '../entities/invoice.entity';

export type InvoiceDocument = mongoose.HydratedDocument<Invoice>;

export const InvoicesSchema = new mongoose.Schema(
  {
    date: String,
    value: String,
    commercial_id: String,
    file_path: String,
  },
  { timestamps: true },
);
