const express = require("express");
const {
  getAllUsers,
  newUser,
  deleteUser,
  updateUser,
} = require("../Controller/UserContoller");

const router = express.Router();

router.route("/getallusers").get(getAllUsers);

router.route("/new-user").post(newUser);
router.route("/deleteuser/:userId").delete(deleteUser);
router.route("/update-user/:userId").patch(updateUser);

module.exports = router;
