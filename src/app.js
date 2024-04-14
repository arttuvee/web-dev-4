import express from 'express';
import api from './api/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

app.use('/api/v1', api);

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cat', (req, res) => {
  res.json({
    cat_id: 1,
    name: 'Fluffy',
    birthdate: '2010-01-01',
    weight: 4.5,
    owner: 'John Doe',
    image: 'https://loremflickr.com/320/240/cat'
  });
});

export default app;
