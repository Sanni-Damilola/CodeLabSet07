import express, { Request, Response } from "express";
import model from "../Model/authorModel";

const getAllBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allBooks = await model.find();

    if (allBooks.length > 0) {
      return res.status(200).json({
        message: "Successfully gotten all Books",
        data: allBooks,
      });
    } else {
      return res.status(200).json({
        message: "No books Avaliable",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "An error occurred getAllBooks",
      error: error,
    });
  }
};

const getOneBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.params.bookId;
    const singleBook = await model.findById(userId);
    return res.status(200).json({
      message: "Book found",
      data: singleBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occurred getOneBook",
      error: error,
    });
  }
};

const postBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { author_name, book_Title, description, email } = req.body;

    const isbnFn = () => {
      const isbn1: number = Math.floor(Math.random() * 10000);
      const isbn2: number = Math.floor(Math.random() * 10000);
      const isbn3: number = Math.floor(Math.random() * 10000);
      const isbn4: number = Math.floor(Math.random() * 10000);

      return `${isbn1}-${isbn2}-${isbn3}-${isbn4} `;
    };

    const cover_image = book_Title.charAt(0);
    const author_Image = author_name.charAt(0);

    let newBook = await model.create({
      author_Image,
      author_name,
      book_Title,
      cover_image,
      description,
      email,
      isbn: isbnFn(),
    });
    return res.status(200).json({
      message: "Book Created",
      data: newBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in postBook",
      error: error,
    });
  }
};

const updateBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { author_name, book_Title, description } = req.body;
    const updateAuthorBook = await model.findByIdAndUpdate(
      req.params.id,
      { author_name, book_Title, description },
      { new: true }
    );
    return res.status(200).json({
      message: "Book Updated",
      data: updateAuthorBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in updateBook",
      error: error,
    });
  }
};

const deleteBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deleteAuthorBook = await model.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Book Deleted",
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in deleteBook",
      error: error,
    });
  }
};

export { getAllBooks, getOneBook, postBook, deleteBook, updateBook };
