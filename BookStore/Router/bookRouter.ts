import express from "express";
import { getAllBooks, getOneBook } from "../Controller/bookController";

const router = express.Router();

router.route("/getallbooks").get(getAllBooks);
router.route("/getone/:bookId").get(getOneBook);

export default router;
