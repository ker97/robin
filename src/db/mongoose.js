const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/robin', {
  // Official settings to solve deprecation warnings
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

