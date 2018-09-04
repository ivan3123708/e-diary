import path from 'path';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

dotenv.config({ path: '.env' });

const publicPath = path.resolve(__dirname, '../', 'client', 'public');
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port);