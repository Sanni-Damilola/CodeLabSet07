import express from "express";
import {
  deleteBook,
  getAllBooks,
  getOneBook,
  updateBook,
} from "../Controller/bookController";

const router = express.Router();

router.route("/getallbooks").get(getAllBooks);
router.route("/getone/:bookId").get(getOneBook);
router.route("/deletebook/:id").delete(deleteBook);
router.route("/updatebook/:id").patch(updateBook);

export default router;
