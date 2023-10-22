import express from "express";
import {
  addUser,
  getUsers,
  deleteUser,
  getUser,
  editUser,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUser);
router.get("/:id", editUser);

router.delete("/:id", deleteUser);

export default router;
