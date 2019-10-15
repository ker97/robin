const express = require('express');
require('./db/mongoose.js');

const accountRouter = require('./routers/account.js');
const studioRouter = require('./routers/studio.js');
const coverRouter = require('./routers/cover.js');

const app = express();

app.use(express.json());
app.use(accountRouter);
app.use(studioRouter);
app.use(coverRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port 3000');
});
