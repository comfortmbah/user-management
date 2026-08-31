import express from "express";
import { userListGet, usersCreateGet, usersCreatePost } from "../controllers/userController.js";

const router = express.Router();

router.get("/", userListGet);

router.get("/create", usersCreateGet);

router.post("/create", usersCreatePost);

export default router;