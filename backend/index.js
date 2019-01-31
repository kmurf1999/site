require('dotenv').load();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import compression from 'compression';

import apollo from './graphql';

const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGO_URI;
const app = express();

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true }
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open on ' + mongoURI);
});

app.use(cors({
  orgin: process.env.CORS_DOMAIN || '*',
  optionsSuccessStatus: 200
}));

if (process.env.NODE_ENV === 'production')
  app.use(compression());


apollo(app);

app.listen(port, () => console.log(`Listening on port ${port}!`));
