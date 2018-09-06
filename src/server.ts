import path from 'path';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import validator from 'express-validator';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import localStrategy from 'passport-local';
import { User } from './models/User';
import authRouter from './routes/auth';

dotenv.config({ path: '.env' });

const publicPath = path.resolve(__dirname, '../', 'client', 'public');
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(validator());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy.Strategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/auth', authRouter);

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`SERVER RUNNING ON PORT ${process.env.PORT}...`));