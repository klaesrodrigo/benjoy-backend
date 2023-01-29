import * as mongoose from 'mongoose';


export const CompaniesContactSchema = new mongoose.Schema({
    email: String,
    phone: String
});
