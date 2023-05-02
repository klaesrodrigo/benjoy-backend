import { Connection } from 'mongoose';
import { InvoicesSchema } from './schemas/invoices.schema';

export const invoicesProviders = [
  {
    provide: 'INVOICE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Invoice', InvoicesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
