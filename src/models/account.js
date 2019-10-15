const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  birthDate: { type: String },
  location: {},
  password: { type: String },
  accountType: { 
    type: String, 
    enum: ['instructor', 'studioOwner']
  },
  qualifications: [{ type: String }],
  languages: [{ type: String }],
  bio: { type: String },
  social: {},
  availability: {},
  service: {},
  studio: {}
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
