import { Connection } from 'mongoose';
import { CompaniesSchema } from './schemas/companies.schema';

export const companiesProviders = [
  {
    provide: 'COMPANY_MODEL',
    useFactory: (connection: Connection) => connection.model('Company', CompaniesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];