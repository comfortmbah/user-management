import express from "express";
import { userListGet, usersCreateGet, usersCreatePost, usersSearchGet } from "../controllers/userController.js";

const router = express.Router();

router.get("/", userListGet);

router.get("/create", usersCreateGet);

router.post("/create", usersCreatePost);

router.get("/search", usersSearchGet);

export default router;