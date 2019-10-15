const mongoose = require('mongoose');

const coverSchema = mongoose.Schema({
  requiredService: {},
  createdBy: {},
  coveredBy: {},
  when: {}
});

const Cover = mongoose.model('Cover', coverSchema);

module.exports = Cover;
