import express from "express";
import {
  getUser,
  getUserById,
  addNewUser,
  putUser,
  deleteUser,
} from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.route("/").get(getUser).post(addNewUser);

userRouter.route("/:id").get(getUserById).delete(deleteUser).put(putUser);

export default userRouter;
