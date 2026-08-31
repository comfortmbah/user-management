import express from "express";
import { userListGet } from "../controllers/userController";

const router = express.Router();

router.get("/", userListGet);

export default router;