import express from "express";
import { userListGet, usersCreateGet } from "../controllers/userController.js";

const router = express.Router();

router.get("/", userListGet);

router.get("/create", usersCreateGet);

export default router;