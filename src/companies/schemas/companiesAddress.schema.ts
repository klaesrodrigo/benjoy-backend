import * as mongoose from 'mongoose';


export const CompaniesAddressSchema = new mongoose.Schema({
    address: String,
    address_number: String,
    complement: String,
    district: String,
    city: String,
    state: String,
    country: String,
});
