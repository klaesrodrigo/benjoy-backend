import mongoose from 'mongoose';

export const UserAddressesSchema = new mongoose.Schema({
  address: String,
  address_number: String,
  complement: String,
  district: String,
  city: String,
  state: String,
  country: String,
});
