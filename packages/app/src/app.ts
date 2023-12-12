import dotenv from 'dotenv';
dotenv.config();
import express, {Express, Router} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import upload from './routers/upload';
const app: Express = express();
const authRouter: Router = require('./routers/auth/authRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(
  cors({
    origin: '*',
  }),
);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello GoKapture Hub!',
  });
});

app.use('/upload', upload);

app.use('/auth', authRouter);

export default app;
