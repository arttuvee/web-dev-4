import app from '../app.js';
import express from 'express';
import catRouter from './routes/cat.js';

const router = express.Router();

router.use('/cat', catRouter);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
