import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

interface IUserDocument extends mongoose.Document {
  username: string;
  email: string;
  password: string;
};

interface IUserModel extends mongoose.Model<IUserDocument> {
  register(user: any, password: string, cb: () => void): any;
  authenticate(): any;
  serializeUser(): any;
  deserializeUser(): any;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

userSchema.plugin(passportLocalMongoose);

export const User = mongoose.model<IUserDocument, IUserModel>('User', userSchema);