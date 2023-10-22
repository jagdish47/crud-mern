import express from "express";
import {
  addUser,
  getUsers,
  deleteUser,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);

router.delete("/:id", deleteUser);

export default router;
