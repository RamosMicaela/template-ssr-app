import express from 'express';

import render from '../middlewares/render/index.js';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', render);

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
