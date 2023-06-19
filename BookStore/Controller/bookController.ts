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
        message: "No books found",
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

export { getAllBooks, getOneBook };
