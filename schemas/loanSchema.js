import mongoose from 'mongoose';
const { Schema } = mongoose;

const loanSchema = new Schema({
  customerName:  String, 
  phoneNumber: Number,
  address:   String,
  loanAmount: Number,
  interest: Number,
  loanTermYears: Number,
  loanType: String,
  description: String,
  createdDate: new Date().toISOString,
  insertedDate: new Date().toISOString
});
