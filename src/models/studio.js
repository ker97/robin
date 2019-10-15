const mongoose = require('mongoose');

const studioSchema = mongoose.Schema({
  title: { type: String },
  location: {},
  openTime: {},
  admins: {},
  managers: {},
  social: {},
  covers: {}
});

const Studio = mongoose.model('Studio', studioSchema);

module.exports = Studio;
