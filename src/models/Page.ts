import mongoose from 'mongoose';

interface IPageDocument extends mongoose.Document {
  user: string;
  data: string;
  text: string;
  isPublic: boolean;
};

interface IPageModel extends mongoose.Model<IPageDocument> {

};

const pageSchema: mongoose.Schema = new mongoose.Schema({
  user: String,
  date: String,
  text: String,
  isPublic: Boolean
});

export const Page = mongoose.model<IPageDocument, IPageModel>('Page', pageSchema);