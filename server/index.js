import express from 'express';

import render from '../middlewares/render/index.js';
import setNameToShow from '../middlewares/set-name/index.js';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', setNameToShow, render);
app.get('/page', render);

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
