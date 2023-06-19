import mongoose, { Document } from "mongoose";

interface Ibook {
  book_Title: string;
  author_name: string;
  description: string;
  author_Image: string;
  email: string;
  views: string[];
  isbn: string;
  cover_image: string;
}

// interface bookStore extends Ibook, mongoose.Document {}
interface bookStore extends Ibook, Document {}

const bookSchema = new mongoose.Schema<Ibook>({
  author_Image: String,
  author_name: String,
  book_Title: String,
  cover_image: String,
  description: String,
  email: String,
  isbn: String,
  views: [],
});

const bookModel = mongoose.model<bookStore>("BookStoreCollection", bookSchema);

export default bookModel;
